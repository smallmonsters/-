# Module 部署

- [Module 部署](#module-部署)
  - [创建一个基础的Gradle配置](#创建一个基础的gradle配置)
  - [抽取公共的gradle配置](#抽取公共的gradle配置)
  - [区分正式环境和测试环境](#区分正式环境和测试环境)
  - [Module根据不同环境可以单独测试](#module根据不同环境可以单独测试)
  - [Module不同的环境展示不同的页面](#module不同的环境展示不同的页面)
  - [app如何跳转到独立运行的Module](#app如何跳转到独立运行的module)
    - [使用第三方开源框架（阿里巴巴的Router）](#使用第三方开源框架阿里巴巴的router)
    - [自己编写代理类](#自己编写代理类)
  - [build 注入环境变量](#build-注入环境变量)
  - [动态生产gradle](#动态生产gradle)

## 创建一个基础的Gradle配置

- 根目录下创建config.gradle

  ```java
  ext {
    projectName = "AndroidCase"
  }
  ```

- 在根目录再的build.gradle引入config.gradle  
  **注意这句话的位置，要放在plugins之后，否则报错：**
 ```only buildscript {}, pluginManagement {} and other plugins {} script blocks are allowed before plugins {} blocks, no other statements are allowed```

  ```java
  plugins {
      id 'com.android.application' version '7.3.1' apply false
      id 'com.android.library' version '7.3.1' apply false
  }
  apply from: "config.gradle"
  ```

- 使用

  ```java
  // app build.gradle
  print(rootProject.ext.projectName) // build 输出AndroidCase
   
  ```

## 抽取公共的gradle配置

```java
// config.gradle
ext {
  compileSdk = 32
  defaultConfig = [
    minSdk                   : 28,
    targetSdk                : 32,
    versionCode              : 1,
    versionName              : "1.0",
    testInstrumentationRunner: "androidx.test.runner.AndroidJUnitRunner",
  ]
  appId = [
    app: "com.example.androidcase"
  ]
}

// app build.gradle

def config = rootProject.ext.defaultConfig
def _compileSdk = rootProject.ext.compileSdk
def appId = rootProject.ext.appId

android {
  compileSdk _compileSdk
  defaultConfig {
    applicationId appId.app
    minSdk config.minSdk
    targetSdk config.targetSdk
    versionCode config.versionCode
    versionName config.versionName
    testInstrumentationRunner config.testInstrumentationRunner
  }
}
```

## 区分正式环境和测试环境

```Java
// 在config.gradle末尾添加
  env = "pro"
  url = [
    pro : "正式环境地址",
    test: "测试环境地址",
  ]
```

```java
// app build.gradle
def url = rootProject.ext.url[rootProject.ext.env]

 buildTypes {
    debug {
      // 在编译的时候，动态生成BuildConfig class
      buildConfigField("String", "debug", "\"${url}\"")
    }
    release {
      minifyEnabled false
      buildConfigField("String", "debug", "\"${url}\"")
      proguardFiles getDefaultProguardFile('proguard-android-optimize.txt'), 'proguard-rules.pro'
    }
  }

```

```java
// app MainActivity
  protected void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    setContentView(R.layout.activity_main);
    Log.e("build", BuildConfig.debug); //正式环境地址 
  }

```

## Module根据不同环境可以单独测试

- 修改config.gradle

```Java
ext{
  ...
  // 通过控制release 来控制module是否可以单独运行
  release = false
  ...
}
```

- 创建一个login Module，修改build.gradle文件

```java
// 使用plugin {id xxx}的写法，没有查到如何添加if语句，改用apply plugin语法
apply plugin: release ? 'com.android.library' : 'com.android.application'
...
defaultConfig{
   if (!release) {
      applicationId appId.login
    }
}
```

- 修改app build.gradle

```java
dependencies {
  ...
  if (release) {
    implementation project(path: ':login')
  }
}
```

## Module不同的环境展示不同的页面

- 在login Module的main下新建debug/AndroidManifest.xml
- 在login Module的com.example.login新建包.debug/Login_DebugMainActivity.java
- 在login Module的res新建activity_login_debug.xml
- 修改login build.gradle

  ```java
  ...
  def _release = rootProject.ext.release
  android{
  sourceSets {
      main {
        //      TODO 为什么这里拿不到release的值呢
        if (_release) {
          manifest.srcFile "src/main/AndroidManifest.xml"
          java {
            // release时，不需要打包debug
            exclude "**/debug/**"
          }
        } else {
          manifest.srcFile "src/main/debug/AndroidManifest.xml"
        }
      }
    }  
  }
  
  ```

## app如何跳转到独立运行的Module

### 使用第三方开源框架（阿里巴巴的Router）

>[github](https://github.com/alibaba/ARouter/blob/master/README_CN.md)

### 自己编写代理类

>[app内各个module之间跳转](https://blog.csdn.net/Hunter2916/article/details/103229989)

## build 注入环境变量
<!-- TODO -->

## 动态生产gradle
<!-- TODO -->
