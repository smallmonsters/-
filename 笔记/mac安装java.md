# mac安装java

```bash
  brew install java
  brew tap homebrew/cask-versions

  # AdoptOpenJDK需要brew的源是git
  # brew tap AdoptOpenJDK/openjdk
  # brew install adoptopenjdk8

  # java 版本管理器
  brew install jenv
  echo 'export PATH="$HOME/.jenv/bin:$PATH"' >> ~/.zshrc
  echo 'eval "$(jenv init -)"' >> ~/.zshrc
  brew install zulu8
  jenv global 1.8
  # jdk7
  # brew install zulu7
  source ~/.zshrc
```

## jenv

### 查看所有java

>jenv versions

### 添加java环境

>jenv add /Library/Java/JavaVirtualMachines/zulu-8.jdk/Contents/Home

### 选择一个Java版本

>jenv global 1.8
