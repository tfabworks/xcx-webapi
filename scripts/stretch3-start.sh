#!/bin/bash
# ビルド手順の参考
# https://github.com/stretch3/stretch3.github.io/blob/source/.github/workflows/deploy.yml

set -ex
cd "$(dirname "$0")/.."

STRETCH3_PATH="./scratch-gui.strech3"

if [[ ! -d "${STRETCH3_PATH}" ]]; then
  git clone --depth 1 https://github.com/LLK/scratch-gui.git -b v3.6.18 "${STRETCH3_PATH}"
fi
cd "${STRETCH3_PATH}"
npm install

# TFabWorksの拡張をセットアップ
repos=(
#  "xcx-g2s"
  "xcx-webapi"
#  "xcx-screenshot"
#  "xcx-cameraselector"
)
for repo in "${repos[@]}"; do
  # 対象リポジトリが自身と同じ場合はcloneの代わりにsymlinkを作成する
  if [[ $PWD == *"${repo}"* ]]; then
    rm -rf "${repo}"
    ln -s ../ "${repo}"
  fi
  if [[ ! -d "${repo}" ]]; then
    git clone --depth 1 "https://github.com/tfabworks/${repo}.git" "${repo}"
  fi
  sh "./${repo}/scripts/stretch3-install.sh"
done

# https://foo.tailxxxxx.ts.net のようなドメインでも devServer へのアクセスを許可するための設定
if ! grep -q disableHostCheck: webpack.config.js; then
  perl -i -pe's/\bdevServer:\s*\{/$& disableHostCheck:true,/' webpack.config.js
fi

npm run build
npm run start
