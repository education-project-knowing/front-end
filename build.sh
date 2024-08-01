#!/bin/sh
rm -rf output  # 기존 output 디렉토리가 있다면 제거
mkdir output
find . -maxdepth 1 -not -name 'output' -not -name '.' -not -name '..' -exec cp -R {} output/ \;
