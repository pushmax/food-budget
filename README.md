# food-budget
Food Budget is a simple app for keeping a diet:
- Set your calories and macronutrients budget
- Record your consumption
- Create custom dishes
- See statistics

# How to set up mobile project for Android:
## 1. Install Open JDK 17
- Downdload the archive version (17.0.2) from here https://jdk.java.net/archive/
- Unpack to C:\Program Files\Java (or whatever you prefer)
- Update PATH env variable with the directory from previous step which you unpacked JDK into (C:\Program Files\Java)
## 2. Setup Android Development Tools
### 2.1. Download Android Command-Line tools
- Create your Android folder and keep it in mind (for instance D:\Android)
- Go to https://developer.android.com/studio#downloads
- Scroll down to "Command line tools only"
- Downdload and extract to your Android folder (for instance, D:\Android\cmdline-tools\latest). The destination folder must be "...Android folder...\cmdline-tools\latest".
- Update PATH env variable with the directory from previous step which you unpacked CLI tools into + add \bin in the end (Example: D:\Android\cmdline-tools\latest\bin)
- Add ANDROID_HOME env variable with value of your Android folder path


### 2.2. Install platform tools, build-tools and concrete platform version SDK (for instance, 34, or whatever is required)
- Run `sdkmanager "platform-tools" "build-tools;34.0.0" "build-tools;33.0.2" "platforms;android-34"`

### 2.3. Install Gradle
- Go to https://gradle.org/releases/
- Scroll to v7.6 (exactly 7.6, not 7.6.*)
- Download binary-only, unpack to C:\Program Files\Gradle and update PATH env variable with C:\Program Files\Gradle\bin

### 2.4 Check if everything is installed correctly
- Run `npm run check:mobile:requirements`
- Make sure no errors or warning are in the output
- If you are sure you installed everything correctly try to manually close VS Code, re-open it and run `npm run check:mobile:requirements` again

### 2.5 Add Android platform to cordova project
- run `npm run android:init`

## 3. Build
- Run `npm run android:build`

## 4. Run
### 4.1. Run on emulator
- Download Android System Image (for instance, run `sdkmanager "system-images;android-33;google_apis;x86_64"`)
  - You can check available packages/images using `sdkmanager --list`;
- Add an AVD with the image you've just downloaded. Example: `avdmanager create avd -n test -k "system-images;android-33;google_apis;x86_64"`
- Add "emulator" folder from your Android folder to PATH env var (for example, D:\Android\emulator)
- Run `npm run android:emulator`
### 4.2. Run on real device
- Run `npm run android:device`

### 4.3. Full-cycle run
You can build full application and run in one command
- For emulator use `npm run android:start:emulator`
- For real device use `npm run android:start:device`