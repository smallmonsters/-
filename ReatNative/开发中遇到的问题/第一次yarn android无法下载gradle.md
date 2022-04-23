### 第一次yarn android无法下载gradle

* 修改gradle-wrapper.properties distributionUrl

  ``` Json
  修改前的值
  distributionUrl=https\://services.gradle.org/distributions/gradle-5.6.2-all.zip
  修改后的值
  distributionUrl=file:///D:/CodeTools/Android/gradles/gradle-5.6.2-all.zip
  ```

* 替换阿里镜像

  ```java
  //文件build.gradle；

  buildscript.repositories{
    //google()
    //jcenter()
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
  }
  allprojects.repositories{
    //google()
    //jcenter()
    maven { url 'https://maven.aliyun.com/repository/google' }
    maven { url 'https://maven.aliyun.com/repository/jcenter' }
    maven { url 'http://maven.aliyun.com/nexus/content/groups/public' }
  }
  ```
