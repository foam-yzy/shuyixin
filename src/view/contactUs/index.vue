<template>
    <div @click="dialogFormVisible = true">
        联系我们
    </div>

    <el-dialog v-model="dialogFormVisible" width="600px" top="201px">
        <div class="form_title">
            <div class="form_title_top">
                <img :src=pic>
                <span class="title_top_content">联系我们</span>
            </div>
            <div class="title_content">我们真诚期待与您合作 ！</div>
        </div>
        <el-form :model="form" ref="myForm" label-position="top" class="el_form">
            <el-form-item label="公司" :rules="[
                {
                    required: true,
                    trigger: 'blur',
                },
            ]">
                <el-input v-model="form.company" placeholder="请输入您的公司" />
            </el-form-item>
            <el-form-item label="业务联系人" prop="checkName" :rules="[
                {
                    required: true,
                    trigger: 'blur',
                },
            ]">
                <el-input v-model="form.contactPeople" placeholder="请输入您的称呼" />
            </el-form-item>
            <el-form-item label="联系方式" :rules="[
                {
                    required: true,
                    trigger: 'blur',
                },
            ]">
                <el-input v-model="form.contactType" autocomplete="off" placeholder="请输入您的联系方式" />
            </el-form-item>
            <el-form-item label="需求描述">
                <el-input v-model="form.content" :rows="4" type="textarea" placeholder="请描述一下您的具体需求" />
            </el-form-item>
            <el-form-item>
                <!-- <el-button type="primary" @click="submitForm(formRef)">Submit</el-button> -->
            </el-form-item>
        </el-form>
        <template #footer>
            <span class="dialog-footer">
                <el-button type="primary" @click="submitForm">
                    提交
                </el-button>
            </span>
        </template>
    </el-dialog>
</template>

<script setup>
import { reactive, ref, unref } from 'vue'
import pic from '@/images/contactImages/1-1.png'
// import type { FormInstance } from 'element-plus'

const dialogFormVisible = ref(false)
const myForm = ref(null)

const ruleForm = reactive({
    name: '',
    password: '',
    checkpass: ''
})
// const rules = {
//     name: [
//         { required: true, trigger: 'blur', validator: checkName, },
//     ]
// }
function checkName(rule, value, callback) {
    if (!value) {
        return callback(new Error('不能为空'));
    }
}
const form = reactive({
    company: '',
    contactPeople: '',
    contactType: '',
    content: '',
})
// const checkName = (rule: any, value: any, callback: any) => {
//     if (!value) {
//         return callback(new Error('Please input the age'))
//     }
// }

// 表单提交
const submitForm = () => {
    // myForm.resetFields()
    dialogFormVisible.value = false

}
</script>

<style lang="scss">
.el-dialog {
    width: 600px;
    height: 900px;

    .el-dialog__header {
        padding: 0;

        .el-dialog__headerbtn {
            top: 0;

            .el-icon {
                width: 34.5px;
                height: 34.5px;
                background-color: rgba(56, 56, 56, 0.17);
                border-radius: 50%;
            }
        }
    }

    .el-dialog__body {
        padding: 0;

        .form_title {
            padding-top: 44px;

            .form_title_top {
                font-size: 30px;
                font-weight: 400;
                line-height: 43.44px;
                height: 43.44px;
                color: rgba(56, 56, 56, 1);

                .title_top_content {
                    margin-left: 7.48px;
                }
            }

            .title_content {
                font-size: 18px;
                font-weight: 400;
                line-height: 26.06px;
                color: rgba(0, 0, 0, 1);
            }
        }

        .el_form {
            padding-top: 4.5px;
            display: flex;
            align-items: center;
            flex-direction: column;

            .el-form-item {
                margin: 0;
                margin-top: 36px;

                .el-form-item__label {
                    font-size: 21px;
                    font-weight: 400;
                    line-height: 30.41px;
                    color: rgba(0, 0, 0, 1);
                    height: 31px;
                    padding: 0;
                }

                .el-form-item__content {

                    .el-input__wrapper {
                        border: 1.5px solid rgba(56, 56, 56, 1);
                        border-radius: 20px;
                    }

                    .el-input {
                        width: 375px;
                        height: 45px;
                    }

                    .el-input__inner {
                        font-size: 21px;
                        font-weight: 400;
                        line-height: 30.41px;
                        color: rgba(128, 128, 128, 1);
                    }

                    .el-textarea {
                        width: 375px;

                        .el-textarea__inner {
                            border: 1.5px solid rgba(56, 56, 56, 1);
                            border-radius: 22.5px;
                            height: 185px;
                            resize: none;
                            font-size: 21px;
                            font-weight: 400;
                            line-height: 30.41px;
                            color: rgba(128, 128, 128, 1);
                        }
                    }
                }
            }
        }
    }

    .el-dialog__footer {
        margin-top: 37.5px;
        height: 60px;
        padding: 0;
        display: flex;
        justify-content: center;

        .dialog-footer {

            .el-button {
                padding: 0;
                border: 0;
                height: 60px;
                width: 225px;
                border-radius: 24px;
                font-size: 21px;
                font-weight: 400;
                letter-spacing: 0px;
                line-height: 30.41px;
            }
        }
    }
}
</style>