mv .git .git-old
mv .git-original .git

rm -rf mobile/ios
rm -rf mobile/android

git add . && git commit -am "fix" && git push

mv .git .git-original
mv .git-old .git