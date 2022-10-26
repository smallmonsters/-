
# Android相关知识

- [Android相关知识](#android相关知识)
  - [基础知识](#基础知识)
    - [相关术语的解析](#相关术语的解析)
    - [SDK兼容](#sdk兼容)
    - [SDK和api](#sdk和api)
    - [应用程序组件](#应用程序组件)
    - [镜像（image）](#镜像image)
  - [依赖包](#依赖包)
  
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

## 依赖包
