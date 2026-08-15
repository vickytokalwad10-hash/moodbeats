# MoodBeats Workspace Rules

## GitHub Auto-Push
After EVERY set of changes to the MoodBeats project, ALWAYS:
1. git add all modified/new source files (exclude *.apk, test scripts, node_modules)
2. git commit -m with a clear conventional commit message describing what changed
3. git push origin main

Repository: https://github.com/vickytokalwad10-hash/moodbeats.git

## APK Versioning
- Always bump versionCode and versionName in android/app/build.gradle before building a new APK
- Always run 
ode copy_apk.js after a successful build to deploy APK to OneDrive and Artifacts
- APK destination: C:\Users\hp\OneDrive\Documents\moodbeats\

