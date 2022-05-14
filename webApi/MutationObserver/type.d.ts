//代码来自于vscode 

interface MutationObserverInit {
  /** 
   * Set to a list of attribute local names (without namespace) if not all attribute mutations need to be observed and attributes is true or omitted. 
   * 值为一个数组，表示需要观察的特定属性
   * */
  attributeFilter?: string[];
  /**
   *  Set to true if attributes is true or omitted and target's attribute value before the mutation needs to be recorded. 
   *  在attributes属性已经设为true的前提下, 将发生变化的属性节点之前的属性值记录下来(记录到下面MutationRecord对象的oldValue属性中)
   * */
  attributeOldValue?: boolean;
  /** 
   * Set to true if mutations to target's attributes are to be observed. Can be omitted if attributeOldValue or attributeFilter is specified. 
   * 是否观察属性变动，也包含了子元素的属性
   * */
  attributes?: boolean;
  /** 
   * Set to true if mutations to target's data are to be observed. Can be omitted if characterDataOldValue is specified. 
   * 如果目标节点为characterData节点(一种抽象接口,具体可以为文本节点,注释节点,以及处理指令节点)时,也要观察该节点的文本内容是否发生变化
   * */
  characterData?: boolean;
  /** 
   * Set to true if characterData is set to true or omitted and target's data before the mutation needs to be recorded. 
   *  在characterData属性已经设为true的前提下,将发生变化characterData节点之前的文本内容记录下来(记录到下面MutationRecord对象的oldValue属性中)
   * */
  characterDataOldValue?: boolean;
  /** 
   * Set to true if mutations to target's children are to be observed. 
   * 观察目标节点的子节点的新增和删除
   * */
  childList?: boolean;
  /**
   *  Set to true if mutations to not just target, but also target's descendants are to be observed. 
   *  观察后代节点，默认为 false，当attributes=false，忽略改配置
   * */
  subtree?: boolean;
}

interface MutationCallback {
  (mutations: MutationRecord[], observer: MutationObserver): void;
}

// const observe:MutationObserver = new MutationObserver(callback:MutationCallback);
interface MutationObserver {
  /** Stops observer from observing any mutations. Until the observe() method is used again, observer's callback will not be invoked. */
  disconnect(): void;
  /**
   * Instructs the user agent to observe a given target (a node) and report any mutations based on the criteria given by options (an object).
   *
   * The options argument allows for setting mutation observation options via object members.
   */
  observe(target: Node, options?: MutationObserverInit): void;
  /**
   *  Empties the record queue and returns what was in there.
   *  在观察者对象上调用takeRecords 会返回 其观察节点上的变化记录(MutationRecord)数组
   */
  takeRecords(): MutationRecord[];
}

declare var MutationObserver: {
  prototype: MutationObserver;
  new(callback: MutationCallback): MutationObserver;
};

interface MutationRecord {
  /** 返回增加节点 */
  readonly addedNodes: NodeList;
  /** 返回已改变的属性 */
  readonly attributeName: string | null;
  /** 返回已改变的自定义属性 */
  readonly attributeNamespace: string | null;
  /** 增加或删除的节点之后紧跟的节点，注意换行被解析为一个text节点 */
  readonly nextSibling: Node | null;
  /**更具不同的type返回不同的值 "attributes":属性改变的之前的值， "characterData" 数据之前的值， "childList"  null. */
  readonly oldValue: string | null;
  /** 增加或删除的节点之前的节点，注意换行被解析为一个text节点 */
  readonly previousSibling: Node | null;
  /** 返回删除的节点 */
  readonly removedNodes: NodeList;
  /** 根据type的类型返回受不同的节点。对于"attributes"，它是属性改变的元素。对于“characterData”，它是characterData节点。对于"childList"，它是子节点发生变化的节点。 */
  readonly target: Node;
  /** 改变的类型 attributes | characterData | childList */
  readonly type: MutationRecordType;
}

declare var MutationRecord: {
  prototype: MutationRecord;
  new(): MutationRecord;
};