module.exports = {
  // placeholder
  placeholder: {
    password: '输入密码',
    repassword: '确认密码'
  },
  // button
  button: {
    create: '创建',
    agree: '同意',
    createAccount: '创建账户',
    importAccount: '导入账户',
    editAccountName: '修改账号名称',
    lookAccount: '查看账户详情',
    removeAccount: '删除当前账号',
    exportPrivateKey: '导出账号私钥',
    recharge: '充值',
    transfer: '转账',
    resource: '资源',
    copy: '复制',
    sure: '确定',
    copyPrivate: '复制私钥',
    doneCopy: '我已备份，进入账户',
    sureCreateAccount: '确认创建',
    save: '保存',
    cancel: '取消',
    copyAddress: '复制收款地址',
    send: '发送',
    surePay: '确认支付',
    unlock: '解锁',
    reset: '重置',
    modifyPassword: '修改密码',
    agreement: '隐私政策',
    policy: '用户协议',
    close: '关闭',
    pledge: '冻结',
    redeem: '解冻',
    pledgeSure: '确认冻结',
    redeemSure: '确认解冻',
    importSure: '确认导入',
    confirm: '确认',
    reject: '拒绝'
  },
  // message
  message: {
    rememberPassword: '请牢记密码，忘记密码将无法找回',
    recommendNew: '推荐新用户使用',
    recommendOld: '推荐已有Tron账户的用户使用',
    savePrivateKey: '请注意：创建新账号时，请及时导出对应的私钥，并保存于安全的地方，不要将私钥泄露给任何人',
    privateKeyOnly: '私钥将是您找回账户的唯一方式',
    noMoreRecord: '无更多记录',
    noRecord: '无交易记录',
    noWhiteList: '无白名单',
    joinWhiteList: '添加白名单，此网站不再提示',
    warningPrivateKey: '安全警告：请勿向任何人泄露您的私钥',
    rechargeOnly: '此地址支持转入TRX及其token',
    verifyPassword: '需要先验证您的当前密码',
    lockSetting: '自动锁定设置',
    lockTip: '当您停止操作时，可以通过设置离开时间来自动锁定TronPay',
    changeLanguage: '选择语言',
    resourceTip: 'TRON网络中的转账、交易、执行合约等操作会消耗资源（带宽和CPU），资源可通过冻结TRX来获得',
    pledgeTip: '通过冻结TRX（波场投票权）和资源，冻结的TRX将被冻结3天，不能被交易。冻结期结束后，已冻结的TRX可被解冻并可用于交易。'
  },
  // verify
  verify: {
    passwordNull: '密码不能为空',
    passwordLength: '密码长度不能少于8位',
    passwordSure: '请再次输入密码',
    passwordMatch: '两次输入密码不一致',
    accountNull: '请输入账号名',
    ownerAccountNull: '请选择付款账户',
    toAddressNull: '请选择付款账户',
    tokenNull: '请选择付款账户',
    number: '请输入数字',
    numberGtZero: '请输入大于0的数字'
  },
  // title
  title: {
    agreement: '用户协议',
    createAccount: '创建账号',
    history: '交易记录',
    editorAccount: '修改账户名称',
    recharge: '充值',
    transfer: '转账',
    sendDetail: '交易详情',
    welcome: '欢迎回来！',
    setting: '设置',
    policy: '隐私政策',
    resource: '资源',
    resourceTitle: '资源与投票权',
    pledgeTrx: '冻结TRX',
    redeemTrx: '解冻TRX',
    importAccount: '导入账号',
    removeAccount: '删除账号',
    signature: '签名请求'
  },
  // alert
  alert: {
    copySuccess: '复制成功',
    copyFail: '复制失败',
    exportSuccess: '导出成功',
    exportFail: '导出失败',
    passwordError: '密码错误',
    sendSuccess: '发送成功',
    sendFail: '发送出错',
    modifySuccess: '修改成功',
    modifyPasswordSuccess: '密码修改成功',
    redeemSuccess: '解冻成功',
    redeemFail: '解冻失败，请稍后再试',
    pledgeSuccess: '冻结成功',
    pledgeFail: '冻结失败',
    existAccount: '此账号已存在',
    illegalPrivateKey: '私钥不合法'
  },
  // confirm
  confirm: {
    removeAccount: '删除账号前请务必确保私钥已经导出，否则删除后该账户将不能恢复'
  },
  // label
  label: {
    ownerAccount: '付款账号',
    toAddress: '收款地址',
    tokenType: '选择Token',
    amount: '转账金额',
    mainNetwork: '主网络',
    testNetwork: '测试网络',
    customNet: '自定义网络',
    bandwidth: '带宽',
    vote: '投票权',
    donePledge: '已冻结TRX',
    redeemTime: '可解冻时间',
    pledgeAmount: '冻结TRX数量：',
    pledgeType: '选择想要获得的资源：',
    redeemAmount: '解冻TRX数量：',
    tronPrivate: '请在下方输入您的Tron账户私钥',
    property: '属性',
    json: 'json数据',
    contract: '合同信息',
    ptsite: '站点：',
    ptaddress: '转出：',
    ptamount: '数量：',
    ptcontract: '合约：',
    ptpayment: '支付：',
    pttype: '类型：'
  },
  // settings
  settings: {
    network: '网络',
    whiteList: '白名单',
    language: '语言',
    modifyPassword: '修改密码',
    lockSetting: '锁定设置',
    about: '关于TronPay',
    lock: '立即锁定'
  },
  // unit
  unit: {
    minute: '分钟'
  },
  type: {
    bandWidth: '带宽（Bandwidth Point）',
    energy: 'CPU （Energy）'
  },
  other: {
    never: '永不'
  },
  networkName: {
    MainNet: '主网络',
    TestNet: '测试网络',
    PrivateNet: '自定义网络'
  }
}
