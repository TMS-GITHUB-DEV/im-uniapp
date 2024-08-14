<template>
  <main-nav-bar class="login-root" :nav-title="'登录'" :nav-show-back="true">
    <!-- 注意，如果需要兼容微信小程序，最好通过setRules方法设置rules规则 -->
    <view class="code-box" v-show="loginMode === 'code'">
      <u--form
          :model="codeAccount"
          :rules="codeRules"
          ref="codeAccountRef"
      >
        <u-form-item
            prop="account"
            borderBottom
        >
          <u--input
              v-model="codeAccount.account"
              placeholder="请输入手机号"
              border="none"
          />
        </u-form-item>
        <u-form-item
            prop="code"
            borderBottom
        >
          <view class="code-input-box">
            <u--input
                v-model="codeAccount.code"
                placeholder="请输入验证码"
                border="none"
            />
            <u-button class="code-btn"
                      type="primary"
                      size="small"
            >
              获取验证码
            </u-button>
          </view>
        </u-form-item>
        <u-form-item>
          <text class="change-login" @click="changeLoginMode('password')">密码登录</text>
        </u-form-item>
        <u-form-item>
          <u-button class="login-btn"
                    type="primary"
                    @click="login('code')"
          >
            登录
          </u-button>
        </u-form-item>
      </u--form>
    </view>
    <view class="normal-box" v-show="loginMode === 'password'">
      <u--form
          :model="normalAccount"
          :rules="normalRules"
          ref="normalAccountRef"
      >
        <u-form-item
            prop="account"
            borderBottom
        >
          <u--input
              v-model="normalAccount.account"
              placeholder="请输入手机号/邮箱"
              border="none"
          />
        </u-form-item>
        <u-form-item
            prop="password"
            borderBottom
        >
          <u--input
              v-model="normalAccount.password"
              placeholder="请输入密码"
              border="none"
          />
        </u-form-item>
        <u-form-item>
          <text class="change-login" @click="changeLoginMode('code')">验证码登录</text>
        </u-form-item>
        <u-form-item>
          <u-button class="login-btn"
                    type="primary"
                    @click="login('password')"
          >
            登录
          </u-button>
        </u-form-item>
      </u--form>
    </view>
    <full-loading v-if="loading" />
  </main-nav-bar>
</template>

<script>
import MainNavBar from '@/components/layout/MainNavBar.vue'
import FullLoading from '@/components/global/FullLoading.vue'
import { normalLogin } from '@/apis/account'

const normalRules = {
  'account': {
    type: 'string',
    required: true,
    message: '请输入手机号或邮箱',
    trigger: [ 'blur', 'change' ]
  },
  'password': {
    type: 'string',
    required: true,
    message: '密码长度不小于6且不大于20',
    min: 6,
    max: 20,
    trigger: [ 'blur', 'change' ]
  },
}

const codeRules = {
  'account': {
    type: 'string',
    required: true,
    message: '请输入手机号',
    trigger: [ 'blur', 'change' ]
  },
  'code': {
    type: 'string',
    required: true,
    message: '验证码错误',
    len: 6,
    trigger: [ 'blur', 'change' ]
  },
}

const loginModeArr = [ 'code', 'password' ]

export default {
  components: { MainNavBar, FullLoading },
  data() {
    return {
      loginModeArr,
      codeRules,
      normalRules,
      loading: false,
      loginMode: 'code',
      normalAccount: {
        account: '',
        password: '',
      },
      codeAccount: {
        account: '',
        code: '',
      },
    }
  },
  methods: {
    changeLoginMode(mode) {
      if (this.loginModeArr.indexOf(mode) === -1) {
        return
      }
      this.loginMode = mode
    },
    login(mode) {
      switch (mode) {
        case 'code':
          break
        case 'password':
          this.loading = true
            // fixme 这么看看能不能用await
          this.$refs.normalAccountRef.validate().then(_ => {
            normalLogin(this.normalAccount).then(res => {
              console.log(res)
            }).catch(err => {
              console.log(err)
            }).finally(_ => {
              this.loading = false
            })
          }).catch(_ => {
            this.loading = false
          })
          // this.loading = true
          // normalLogin(this.normalAccount).then(res => {
          //   console.log(res)
          // }).catch(err => {
          //   console.log(err)
          // }).finally(_ => {
          //   // this.loading = false
          // })
          break
        default:
          break
      }
    }
  },
  onReady() {
    //如果需要兼容微信小程序，并且校验规则中含有方法等，只能通过setRules方法设置规则。
    this.$refs.codeAccountRef.setRules(this.codeRules)
    this.$refs.normalAccountRef.setRules(this.normalRules)
  },
}

</script>

<style scoped lang="scss">
.u-form {
  width: 80%;
  margin: 0 auto;

  .u-input {
    margin-top: 40rpx;
  }

  .login-btn {
    width: 50%;
    margin-top: 80rpx;
    font-size: 1.3rem;
  }

  .change-login {
    padding: 0 15rpx;
    margin: 0 0 0 auto;
    font-size: 0.9rem;
    color: #0099ff;

    :active {
      color: #0048ff;
    }
  }
}

.code-input-box {
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  width: 100%;

  .u-input {
    flex: 1;
    margin: auto;
  }

  .code-btn {
    width: auto;
    margin-left: 10rpx;
  }
}
</style>
