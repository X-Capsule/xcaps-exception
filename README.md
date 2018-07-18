# Exception 文档说明

主要描述 Exception 模块的结构, 以及使用说明

## 1. Exception 定义
### 1.1. Exception class

通过继承 Node.js Error 来实现 checked exceptions 的定义. 以下为 Exception 字段构成描述.

#### Properties

* `code` - 自定义错误代码
* `message` - 错误信息
* `stack` - 错误堆栈信息

#### Methods

- `fetchPropertyStacks() Beta版接口`
	* 该接口是返回错误代码 `code`. 类型为数组, 它将返回所有异常链上的错误代码信息. 目前, 处于测试阶段, 各个业务层不需调用该方法.
	* 该接口返回异常的 `message` 信息. 类型为数组, 它将返回异常链上的错误信息. 目前, 处于测试阶段, 各个业务层不需调用该方法.
- `getCause()` 获取最终原因对象.
	
### 1.2 Http Response Exceptions

用于 Application 层定义需要返回的 Http Exception 类型. 对 Web Application 根据业务场景返回 Http Response 信息进行了封装. 应用层需自定义和业务相关的异常信息来继承以下对应的异常类型.
- `BadRequestException` - 400
- `UnauthorizedException` - 401
- `PaymentRequiredException` - 402
- `ForbiddenException` - 403
- `NotFoundException` - 404
- `MethodNotAllowedException` - 405 
- `NotAcceptableException` - 406
- `ConflictException` - 409
- `GoneException` - 410
- `PreconditionFailedException` - 412
- `RequestEntityTooLargeException` - 413
- `InternalServerErrorException` - 500
- `NotImplementedException` - 501
- `ServiceUnavailableException` - 503
目前, 提供了以上几种 Exceptions. 主要参考文章: [Exceptions and HTTP Status Codes](https://cloud.google.com/endpoints/docs/frameworks/java/exceptions)
	
## 2. 异常处理框架分析(Blog)

异常处理也具备框架性结构, 根据领域的架构分解, 我认为异常的处理也是分而治之的思想来处理. 所以在异常的处理上作出了一下的架构分析.

### 2.1. 异常处理的原则

异常信息必然是被**内部调用者**自内而外的传递给**外部调用者**. 所以, 必须明确 **异常 Payload** 所必须承载的异常信息.

#### 分析1: 用户请求处理

> Who cares what kind of outputting things?(谁关心什么样的输出).  -- Benjamin Woo

在实际的架构中, 我们需要处理用户从远端发起的请求(**Http Request**). 并且根据业务逻辑对用户的输入作出相应的结果响应.

#### 分析2: 业务场景驱动下的异常信息

> 异常设计的初衷一定是不会脱离实际的业务流程. -- Benjamin Woo

我们有一个已知必然存在的一个关键设计要素 ---- **业务流程**. 任何明确的业务流程里, 必然存在异常业务处理流程分支. 如果有以上一个设计要素存在, 那么就能够非常清晰的将业务异常处理流程转化为代码设计. 前提是我们已经明确了我们的需求, 明确了我们的业务流程.

#### 分析3: 软件架构中业务异常处理的拆分粒度

在软件代码设计环节, 我们需要将大量的业务流程转化成软件业务代码. 但这里是有一个在开发环节的诉求, 就是拥有一个合理的软件代码结构. 以便于能够很好的规划和适应日新月异的业务需求. 所以, 这里提出设计的关键要素是如何将业务流程转化到我们的软件架构中去.

##### 业务异常分支也是业务流程的一部分(异常情况下的应用场景)

业务异常分支也是业务流程的一部分, 表达了用户应用场景的一部分. 实际上我们不能够脱离需求谈代码设计.
实际上我们回头看看我们之前走过的, 确实是掉进了一个误区. 我们一直在极力去设计一个合理的 Exception 处理结构. 但始终没有找到合适的答案并总是在凑合着使用.


##### Exception 在软件架构中的实施
分析我们现有的软件架构 -- 领域模型. 
从现实出发, 分析核心的代码模块.

`Port.Adapter` - 我们提供 Swagger APIs, 提供对外的沟通渠道. 
`Application` - 提供应用业务流程, 根据应用业务流程提供异常流程分支处理.
`Domain` - 提供领域模型功能, 根据领域模型提供的功能提供异常流程分支处理.

#### 具体的案例分析


