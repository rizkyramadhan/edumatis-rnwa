mv .git .git-old
mv .git-original .git

mv mobile/ios mobile/ios-temp
mv mobile/android mobile/android-temp

git add . && git commit -am "fix" && git push

mv .git .git-original
mv .git-old .git

mv mobile/ios-temp mobile/ios
mv mobile/android-temp mobile/android