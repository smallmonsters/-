
# Android相关知识

- [Android相关知识](#android相关知识)
  - [基础知识](#基础知识)
    - [相关术语的解析](#相关术语的解析)
    - [SDK兼容](#sdk兼容)
    - [SDK和api](#sdk和api)
    - [应用程序组件](#应用程序组件)
    - [镜像（image）](#镜像image)
    - [模块和项目](#模块和项目)
    - [ConstraintLayout，RelativeLayout和LinearLayout区别](#constraintlayoutrelativelayout和linearlayout区别)
    - [RecyclerView](#recyclerview)
  - [文件存储](#文件存储)
    - [内部存储](#内部存储)
      - [典型的内部存储目录结构](#典型的内部存储目录结构)
      - [API](#api)
    - [外部存储](#外部存储)
  - [Android Gradle](#android-gradle)
  - [Gradle配置](#gradle配置)
    - [Project的build.gradle文件](#project的buildgradle文件)
    - [Module的build.gradle文件](#module的buildgradle文件)
      - [apply plugin](#apply-plugin)
      - [defaultConfig](#defaultconfig)
      - [buildTypes](#buildtypes)
      - [dependencies](#dependencies)
      - [compileOptions](#compileoptions)
  - [AndroidManifest.xml](#androidmanifestxml)
  - [资源类型概览（res/xx）](#资源类型概览resxx)
  - [Jetpack Compose](#jetpack-compose)
  - [mvp理解](#mvp理解)
  - [Android各种单位换算](#android各种单位换算)
    - [px](#px)
    - [ppi](#ppi)
    - [dpi](#dpi)
    - [dp(dip)](#dpdip)
    - [sp](#sp)
  - [Module和组件](#module和组件)
  - [Binder](#binder)
  - [handler](#handler)
  
## 基础知识

可以直接查看菜鸟android部分

### 相关术语的解析

- Dalvik： Android特有的虚拟机,和JVM不同,Dalvik虚拟机非常适合在移动终端上使用!
- AVD： (android virtual machine):安卓虚拟设备,就是安卓的模拟器
- ADT： (android development tools)安卓开发工具
- SDK：(software development kit)软件开发工具包,就是安卓系统,平台架构等的工具集合,如adb.exe
- DDMS：(dalvik debug monitor service)安卓调试工具
- adb：安卓调试桥,在sdk的platform-tools目录下,功能很多,命令行必备
- DX工具：将.class转换成.dex文件
- AAPT：(android asset packing tool),安卓资源打包工具
- R.java文件：由aapt工具根据App中的资源文件自动生成,可以理解为资源字典
- AndroidManifest.xml：app包名 + 组件声明 + 程序兼容的最低版本 + 所需权限等程序的配置文件

### SDK兼容

- minimun SDK：最低支持的android api版本，低于这个版本的android手机不能安装新建的这个应用
- Target SDK：新建的这个应用最高支持android api版本
- Compile With：哪个版本的android SDK编译新建的这个项目，也就是最适合的，最适合支持新创建的应用的android版本

### SDK和api

SDK就是Kit，工具箱嘛，IOS平台上就是XCode，一系列的工具组合在一起，比如你在编辑器里敲代码的时候它会自动补全代码，自动错误检查，你点一下Run，它会调用编译器来自动编译，编译完它会调用iPhone的模拟器来运行，这就是SDK，提供整套的开发工具供开发者使用

api就相当与接口。在这个版本的api里调用相机是接收一个参数的方法，在另一个版本调用相机是接收两个参数的方法。

### [应用程序组件](https://www.runoob.com/android/android-application-components.html)

| 组件                | 描述                                             |
| ------------------- | ------------------------------------------------ |
| Activities          | 活动标识: 描述UI，并且处理用户与机器屏幕的交互。           |
| Services            | 服务: 处理与应用程序关联的后台操作。                   |
| Broadcast Receivers | 广播接收器: 处理Android操作系统和应用程序之间的通信。        |
| Content Providers   | 内容提供者组件: 处理数据和数据库管理方面的问题。                 |
| Fragments           | 代表活动中的一个行为或者一部分用户界面。         |
| Views               | 绘制在屏幕上的UI元素，包括按钮，列表等。         |
| Layouts             | 控制屏幕格式，展示视图外观的View的继承。         |
| Intents             | 组件间的消息连线。                               |
| Resources           | 外部元素，例如字符串资源、常量资源及图片资源等。 |
| Manifest            | 应用程序的配置文件。                             |

### 镜像（image）

- x86 和x86_64，完全的命名是Android x86 和Android x86-64。只有英特尔atom芯片的安卓系统手机适合这些程序，退环境了
- aarch64理解成是armv8架构的64位模式；AArch32是armv8架构的32位模式，向后兼容ARMv7-A；armv8是arm目前的主流架构，上一代架构是armv7。
- armv7没有64位模式，只有32位。骁龙800和之前的soc跑不了这个软件的。
- 安卓手机只要年代比骁龙810晚，并且是64位处理器的，那么就能运行该程序

### 模块和项目

Android Studio 中的概念。项目（Project）对应其他软件（vscode）中的工作空间（WorkSpace），模块（Module）对应其他软件（vscode）中的项目（Project）

### ConstraintLayout，RelativeLayout和LinearLayout区别

TODO:

### RecyclerView

[官网](https://developer.android.google.cn/guide/topics/ui/layout/recyclerview?hl=zh-cn)

## 文件存储

内部存 /外部存储 是在**文件系统逻辑层**面相对于开发者来说的，指具体的路径。

### 内部存储

- 文件默认只能被你的应用访问到,当应用卸载之后，内部存储中的这些文件也被删除。
- 如果你在创建内部存储文件的时候将文件属性设置成可读且文件的属性不是私有（private），其他app在知道应用的包名就能够访问应用的数据
- 路径：/data/data/package_name

#### 典型的内部存储目录结构

- app_webview：主要用于存储webview加载过程中的数据，例如Cookie，LocalStorage等。
- cache：主要用于存储使用应用过程中产生的缓存数据。
- databases：主要用于存储数据库类型的数据。我们平常创建的数据库文件就是存储在这里。
- files：可以在该目录下存储配置文件，敏感数据等。
- shared_prefs：用于存储SharedPreference文件。我们使用SharedPreference的时候只指定了文件名，并没有指定存储路径，其实SP的文件就是保存到了这个目录下。

#### API

```java
getDataDir()  //获取的目录是/data/user/0/package_name，即应用内部存储的根目录
getFilesDir() //获取的目录是/data/user/0/package_name/files，即应用内部存储的files目录
getCacheDir() //获取的目录是/data/user/0/package_name/cache，即应用内部存储的cache目录
getDir(String name, int mode) //获取的目录是/data/user/0/package_name/app_name，如果该目录不存在，系统会自动创建该目录。
```

### 外部存储

- 外部存储，分为 公共目录 和 私有目录
- 4.4（API19）以前是内置存储（机身存储）当做内部存储，扩展的SD卡当做是外部存储。**公共目录和私有目录都需要读写权限**
- 4.4（API19）以后是机身存储存储（手机自身带的存储叫做机身存储）在概念上分成了”内部存储internal” 和”外部存储external” 两部分，扩展的SD卡仍是外部存储。**公共目录需要读写权限**和**私有目录都不需要读写权限**

## Android Gradle

[官方文档](https://developer.android.google.cn/studio/releases/gradle-plugin?hl=zh-cn#groovy)

## Gradle配置

[官方文档](https://developer.android.google.cn/studio/build?hl=zh-cn)

### Project的build.gradle文件

```Groovy
// Top-level build file where you can add configuration options common to all sub-projects/modules.

buildscript {//这里是gradle脚本执行所需依赖，分别是对应的maven库和插件
    
    repositories {
        google()//从Android Studio3.0后新增了google()配置，可以引用google上的开源项目
        jcenter()//是一个类似于github的代码托管仓库，声明了jcenter()配置，可以轻松引用 jcenter上的开源项目
    }
    dependencies {
        classpath 'com.android.tools.build:gradle:3.0.0'////此处是android的插件gradle，gradle是一个强大的项目构建工具
        

        // NOTE: Do not place your application dependencies here; they belong
        // in the individual module build.gradle files
    }
}

allprojects {//这里是项目本身需要的依赖，比如项目所需的maven库
    repositories {
        google()
        jcenter()
    }
}

// 运行gradle clean时，执行此处定义的task任务。
// 该任务继承自Delete，删除根目录中的build目录。
// 相当于执行Delete.delete(rootProject.buildDir)。
// gradle使用groovy语言，调用method时可以不用加（）。
task clean(type: Delete) {
    delete rootProject.buildDir
}
```

### Module的build.gradle文件

#### apply plugin

```Groovy
// 声明是Android程序，
//com.android.application 表示这是一个应用程序模块
//com.android.library 标识这是一个库模块
//而这区别：前者可以直接运行，后着是依附别的应用程序运行
apply plugin: 'com.android.application'
```

#### defaultConfig

```Groovy
    compileSdkVersion 27//设置编译时用的Android版本
    defaultConfig {
        applicationId "com.billy.myapplication"//项目的包名，与清单文件的manifest中的package一致
        minSdkVersion 16//项目最低兼容的版本
        targetSdkVersion 27//项目的目标版本
        versionCode 1//版本号，必须是整数
        versionName "1.0"//版本名称
        testInstrumentationRunner "android.support.test.runner.AndroidJUnitRunner"//表明要使用AndroidJUnitRunner进行单元测试
    }
```

#### buildTypes

```Groovy
    buildTypes {// 生产/测试环境配置
        release {// 生产环境
            buildConfigField("boolean", "LOG_DEBUG", "false")//配置Log日志
            buildConfigField("String", "URL_PERFIX", "\"https://release.cn/\"")// 配置URL前缀
            minifyEnabled false//是否对代码进行混淆
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'//指定混淆的规则文件
            signingConfig signingConfigs.release//设置签名信息
            pseudoLocalesEnabled false//是否在APK中生成伪语言环境，帮助国际化的东西，一般使用的不多
            zipAlignEnabled true//是否对APK包执行ZIP对齐优化，减小zip体积，增加运行效率
            applicationIdSuffix 'test'//在applicationId 中添加了一个后缀，一般使用的不多
            versionNameSuffix 'test'//在applicationId 中添加了一个后缀，一般使用的不多
        }
        debug {// 测试环境
            buildConfigField("boolean", "LOG_DEBUG", "true")//配置Log日志
            buildConfigField("String", "URL_PERFIX", "\"https://test.com/\"")// 配置URL前缀
            minifyEnabled false//是否对代码进行混淆
            proguardFiles getDefaultProguardFile('proguard-android.txt'), 'proguard-rules.pro'//指定混淆的规则文件
            signingConfig signingConfigs.debug//设置签名信息
            debuggable false//是否支持断点调试
            jniDebuggable false//是否可以调试NDK代码
            renderscriptDebuggable false//是否开启渲染脚本就是一些c写的渲染方法
            zipAlignEnabled true//是否对APK包执行ZIP对齐优化，减小zip体积，增加运行效率
            pseudoLocalesEnabled false//是否在APK中生成伪语言环境，帮助国际化的东西，一般使用的不多
            applicationIdSuffix 'test'//在applicationId 中添加了一个后缀，一般使用的不多
            versionNameSuffix 'test'//在applicationId 中添加了一个后缀，一般使用的不多
        }
    }
```

#### dependencies

```Groovy
implementation 'androidx.appcompat:appcompat:1.4.1' // 官方解决不同版本的兼容依赖
implementation fileTree(include: ['*.jar'], dir: 'libs')//本地jar包依赖
```

#### compileOptions

```Groovy
 compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8 //表示 编译使用的 Java 版本
        targetCompatibility JavaVersion.VERSION_1_8 //表示 生成 Java 字节码版本
        encoding "UTF-8" //表示加载的 Java 源文件的编码 , 默认为 UTF-8 , 类型为字符串 
        incremental true //是否启用 gradle 新增加的 增量模式 , 默认为 true 
    }
```

## AndroidManifest.xml

[官方文档](https://developer.android.google.cn/guide/topics/manifest/manifest-intro?hl=zh-cn)

## 资源类型概览（res/xx）

[官方文档](https://developer.android.google.cn/guide/topics/resources/available-resources?hl=zh-cn)

## Jetpack Compose
<!-- TODO: https://developer.android.google.cn/jetpack/compose/documentation?hl=zh-cn -->

## mvp理解

> 资料一：[Android安卓架构MVC、MVP、MVVM之间的区别和联系](https://github.com/JereChen11/Android-MVC-MVP-MVVM-Simple-Demo)  

## Android各种单位换算

### px

即像素，1px代表屏幕上的一个物理像素点。如果使用px就会导致不同分辨率的字体不一样大小，分辨率越大字越小

### ppi

在手机屏幕中指的是像素密度，这个是物理上的概念，它是客观存在的不会改变。

### dpi

dpi每英寸点数，每英寸包含像素个数即像素密度，指的是在**系统软件**上指定的单位尺寸的像素数量，它往往是写在**系统出厂配置文件的一个固定值**。  
假设有一部手机，屏幕的物理尺寸为1.5x2.0英寸，屏幕分辨率为240x320，则dpi=240/1.5=160dpi（横向）= 320/2=160dpi（纵向）。简单说就是尺寸的长\宽\斜边 除以 屏幕分辨率的长\宽\斜边。实际上在手机厂家没有修改配置时，Android默认了几种dpi：ldpi（240×320）、mdpi（320x480）、hdpi（480x800）、xhdpi（720x1280）、xxhdpi（1080x1920），1dp分别等于0.75px、1px、1.5px、2px、3px

### dp(dip)

设备独立像素。
1、先明白一个概念，所有显示到屏幕上的图像都是以 px 为单位。
2、Dip 是我们开发中使用的长度单位，最后他也需要转换成 px。
3、计算这个设备上 1dip 等于多少 px:
   px = dip x dpi /160

```java

DisplayMetrics dm = new DisplayMetrics();
getWindowManager().getDefaultDisplay().getMetrics(dm);
//通常我们在使用DisplayMetrics时，都是直接获取内部变量来使用。所以下面直接列出各个内部变量。

dm.ydpi;     //得到物理屏幕上 Y 轴方向每英寸的像素
dm.xdpi;     //得到物理屏幕上 X 轴方向每英寸的像素 
             //ps:  其实这两个大多数情况下都是相同的
             //你能想象上面像素密度大很清晰 下面密度小跟马赛克一样吗 233333

dm.density;           //获取当前设备的基准比例
dm.densityDpi;        //获取系统dpi，随着 build.prop 文件中的代码而改变。

dm.widthPixels;       //获取屏幕宽度的像素数量

//获取屏幕高度的像素数量！
//注意 - 因为这里会自动减去32dp的像素数量，根据分辨率不同的设备，减去的像素数量也不同，但是可以根据公式推算完整（px = dp x 基准比例）。
/*为啥不用dm.densityDpi / 160 得到基准比例？
  因为那个会随着build.prop文件代码变更而更改，算出来的不一定准确*/
dm.heightPixels + 32 * dm.ydpi / 160;

DisplayMetrics dm = new DisplayMetrics();
getWindowManager().getDefaultDisplay().getMetrics(dm);
//通常我们在使用DisplayMetrics时，都是直接获取内部变量来使用。所以下面直接列出各个内部变量。
 
dm.ydpi;     //得到物理屏幕上 Y 轴方向每英寸的像素
dm.xdpi;     //得到物理屏幕上 X 轴方向每英寸的像素 
             //ps:  其实这两个大多数情况下都是相同的
             //你能想象上面像素密度大很清晰 下面密度小跟马赛克一样吗 233333
 
dm.density;           //获取当前设备的基准比例
dm.densityDpi;        //获取系统dpi，随着 build.prop 文件中的代码而改变。
 
dm.widthPixels;       //获取屏幕宽度的像素数量
 
//获取屏幕高度的像素数量！
//注意 - 因为这里会自动减去32dp的像素数量，根据分辨率不同的设备，减去的像素数量也不同，但是可以根据公式推算完整（px = dp x 基准比例）。
/*为啥不用dm.densityDpi / 160 得到基准比例？
  因为那个会随着build.prop文件代码变更而更改，算出来的不一定准确*/
dm.heightPixels + 32 * dm.ydpi / 160;
```

### sp

sp除了受屏幕密度影响外,还受到用户的字体大小影响

## Module和组件

> [Android组件化和插件化开发](https://juejin.cn/post/6953600472045486111)

## Binder
<!-- TODO: -->

## handler
<!-- TODO: -->