const API_BASE = 'http://localhost:3001';
const TEST_RESULTS = [];

function logTest(testName, success, message, data = null) {
  const result = {
    test: testName,
    success,
    message,
    timestamp: new Date().toISOString(),
  };
  if (data) result.data = data;
  TEST_RESULTS.push(result);

  const icon = success ? '✅' : '❌';
  console.log(`${icon} ${testName}: ${message}`);
  if (data && !success) console.log('   Details:', JSON.stringify(data, null, 2));
}

async function testStockAPI(code, market, expectedName) {
  try {
    const response = await fetch(`${API_BASE}/api/stock/data?code=${code}&market=${market}`);
    const data = await response.json();

    if (!response.ok) {
      logTest(`${code} (${market})`, false, `API error: ${data.error}`, data);
      return false;
    }

    if (data.info.name !== expectedName) {
      logTest(`${code} (${market})`, false, `Name mismatch. Expected: ${expectedName}, Got: ${data.info.name}`);
      return false;
    }

    if (!data.info.price || data.info.price === '---' || data.info.price === '0') {
      logTest(`${code} (${market})`, false, 'Invalid price data', { price: data.info.price });
      return false;
    }

    if (!data.prices || data.prices.length === 0) {
      logTest(`${code} (${market})`, false, 'No historical data', { count: data.prices?.length });
      return false;
    }

    logTest(
      `${code} (${market})`,
      true,
      `✓ Price: ${data.info.price}, History: ${data.prices.length} records`,
      { name: data.info.name, price: data.info.price, records: data.prices.length }
    );
    return true;
  } catch (error) {
    logTest(`${code} (${market})`, false, `Exception: ${error.message}`, { error: error.stack });
    return false;
  }
}

async function testErrorHandling(code, market, expectedError) {
  try {
    const response = await fetch(`${API_BASE}/api/stock/data?code=${code}&market=${market}`);
    const data = await response.json();

    if (response.ok) {
      logTest(`Error Test: ${code}`, false, 'Should have failed but succeeded', data);
      return false;
    }

    if (data.error) {
      logTest(`Error Test: ${code}`, true, `Correctly handled error: ${data.error}`);
      return true;
    }

    logTest(`Error Test: ${code}`, false, 'No error message in response', data);
    return false;
  } catch (error) {
    logTest(`Error Test: ${code}`, false, `Exception: ${error.message}`, { error: error.stack });
    return false;
  }
}

async function testMissingCode() {
  try {
    const response = await fetch(`${API_BASE}/api/stock/data?market=us`);
    const data = await response.json();

    if (response.status === 400 && data.error === 'Stock code is required') {
      logTest('Missing Code Test', true, 'Correctly rejected missing code');
      return true;
    }

    logTest('Missing Code Test', false, 'Did not reject missing code', data);
    return false;
  } catch (error) {
    logTest('Missing Code Test', false, `Exception: ${error.message}`);
    return false;
  }
}

async function testHealthEndpoint() {
  try {
    const response = await fetch(`${API_BASE}/health`);
    const data = await response.json();

    if (response.ok && data.status === 'ok') {
      logTest('Health Check', true, `Server healthy: ${data.environment}`);
      return true;
    }

    logTest('Health Check', false, 'Unexpected health response', data);
    return false;
  } catch (error) {
    logTest('Health Check', false, `Exception: ${error.message}`);
    return false;
  }
}

async function runTests() {
  console.log('🧪 Stock API Test Suite\n');
  console.log('=' .repeat(60));

  console.log('\n📊 Testing Server Health...');
  await testHealthEndpoint();

  console.log('\n📊 Testing US Stocks...');
  await testStockAPI('AAPL', 'us', 'Apple Inc.');
  await testStockAPI('MSFT', 'us', 'Microsoft Corporation');
  await testStockAPI('GOOGL', 'us', 'Alphabet Inc.');

  console.log('\n📊 Testing Japanese Stocks...');
  await testStockAPI('7203', 'jp', 'トヨタ自動車');
  await testStockAPI('6758', 'jp', 'ソニーグループ');
  await testStockAPI('9984', 'jp', 'ソフトバンクグループ');

  console.log('\n⚠️  Testing Error Handling...');
  await testMissingCode();
  await testErrorHandling('INVALID123', 'us', 'not found');
  await testErrorHandling('0000', 'jp', 'not found');

  console.log('\n' + '=' .repeat(60));
  console.log('\n📈 Test Summary:');
  const passed = TEST_RESULTS.filter((r) => r.success).length;
  const failed = TEST_RESULTS.filter((r) => !r.success).length;
  const total = TEST_RESULTS.length;
  const passRate = ((passed / total) * 100).toFixed(1);

  console.log(`Total Tests: ${total}`);
  console.log(`✅ Passed: ${passed}`);
  console.log(`❌ Failed: ${failed}`);
  console.log(`Success Rate: ${passRate}%\n`);

  if (failed > 0) {
    console.log('❌ Failed Tests:');
    TEST_RESULTS.filter((r) => !r.success).forEach((r) => {
      console.log(`   - ${r.test}: ${r.message}`);
    });
  }

  process.exit(failed > 0 ? 1 : 0);
}

runTests().catch((error) => {
  console.error('Test suite failed:', error);
  process.exit(1);
});
