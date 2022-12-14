import request from '@/utils/request';
import {baseDirTool} from "@/apis/base";  //加载请求配置文件


function Func(method, data = null, params = null) {
  return request({url: baseDirTool + '/apiGift', method: method, data: data, params: params});
}

// 送出礼物接口
export function sendgift(params) {
  return request({url: baseDirTool + '/apiGift/sendgift', method: 'get', params: params});
}