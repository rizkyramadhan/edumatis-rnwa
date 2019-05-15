yarn build
yarn export
mkdir temp
cp -r out temp
cp config.yaml temp
cp captain-definition temp
cp Dockerfile temp
cd temp
git init && git add . && git commit -am "fix" && caprover deploy && rm -rf .git

cd ..
rm -rf temp