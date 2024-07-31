#!/bin/sh
# 현재 디렉토리에 output 폴더 생성
mkdir -p output

# 현재 디렉토리의 모든 내용을 output 폴더로 복사
# (단, output 폴더 자체와 .git 폴더는 제외)
find . -maxdepth 1 -not -name 'output' -not -name '.git' -not -name '.' -exec cp -R {} output/ \;

# output 폴더의 내용 확인 (디버깅용)
echo "Contents of output folder:"
ls -R output/
