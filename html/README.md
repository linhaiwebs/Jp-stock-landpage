# 静的HTML変換ガイド

このフォルダには、フッターリンクの各ページを静的HTMLに変換したファイルが含まれています。

## 変換済みファイル

### 法的文書
- `terms.html` - 利用規約
- `privacy.html` - プライバシーポリシー
- `disclaimer.html` - 免責事項 (変換予定)
- `risk-disclosure.html` - リスク開示書面 (変換予定)
- `specified-commercial-transaction-act.html` - 特定商取引法表記 (変換予定)

### お問い合わせ
- `contact.html` - お問い合わせフォーム (変換予定)
- `faq.html` - よくある質問 (変換予定)
- `support.html` - サポート (変換予定)

### 会社情報
- `about.html` - 会社概要 (変換予定)
- `team.html` - チーム紹介 (変換予定)
- `careers.html` - 採用情報 (変換予定)
- `press.html` - プレスリリース (変換予定)

## 技術仕様

### スタイル
- 全てのスタイルは`<style>`タグ内にインライン定義
- 外部CSSファイルへの依存なし
- Tailwind CSSクラスを標準CSSに変換済み

### レスポンシブデザイン
- モバイルファースト設計
- メディアクエリ(@media)使用
- ブレークポイント: 768px

### ブラウザ互換性
- モダンブラウザ対応 (Chrome, Firefox, Safari, Edge)
- IE11は非対応

## 使用方法

1. 各HTMLファイルは独立して動作します
2. 任意のWebサーバーでホスト可能
3. `index.html`から各ページへのリンクを設定できます

## 変換元ファイル

元のReactコンポーネント: `/src/pages/`

## 注意事項

### フォーム機能
- お問い合わせフォームは静的HTML版ではバックエンド処理が未実装
- 実装するには、フォーム送信エンドポイントの設定が必要

### 動的コンテンツ
- Reactの状態管理機能は含まれません
- インタラクティブな機能は純粋なJavaScriptで再実装が必要

### リンク
- 内部リンクは`/`(ルート)へのリンクのみ
- 必要に応じて各HTMLファイルへの相対パスに変更してください

## 今後の作業

残りのページの変換:
1. Disclaimer
2. RiskDisclosure
3. SpecifiedCommercialTransactionAct
4. Contact
5. FAQ
6. Support
7. About
8. Team
9. Careers
10. Press

## カスタマイズ

各HTMLファイルの`<style>`タグ内でスタイルをカスタマイズできます。
主な変数:
- フォント: Hiragino Sans, Noto Sans JP
- 主要カラー: #2563eb (青)
- 背景: linear-gradient
- シャドウ: box-shadow

## 連絡先

株式会社結禾テクノロジーズ
- メール: ahuang2025123123@gmail.com
- 電話: 080-3376-0625
