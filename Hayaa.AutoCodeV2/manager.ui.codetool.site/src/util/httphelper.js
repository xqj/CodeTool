import axios from 'axios'
import qs from 'qs'
import {Notification} from 'element-ui';
import webstore from '../webstore'



const httphelper = {
    get:function(url, paramater, call, errcall,isnotify) {
        axios.get(url, paramater)
            .then(function (rep) {
                if (call) {
                    if (rep.data.code == 0) {
                        call(rep.data.data)
                    } else {
                        if(errcall) errcall(rep.data);
                        else {
                            if (rep.data.code == 1001) {
                              webstore.vueRouter.push("/login")
                            } else {
                                if(isnotify)
                                Notification.warning(rep.data.message)
                            }
                        }
                    }
                } else {
                    if(isnotify)
                    Notification.success("操作成功")
                }

            })
            .catch(function (rep) {
                Notification.error("网络异常")
            });
    },
    authedget:function(url, paramater, call, errcall,isnotify) {
        paramater.authtoken = webstore.getAuthKey();
        return this.get(url, paramater, call, errcall,isnotify);
    },
    post:function(url, paramater, call, errcall,isnotify) {
        axios.post(url,paramater,{withCredentials:true})
            .then(function (rep) {

                if (call) {
                    if (rep.data.code == 0) {
                        call(rep.data.data)
                    } else {
                        if(errcall) errcall(rep.data);
                        else {
                            if (rep.data.code == 1001) {
                              webstore.vueRouter.push("/login")
                            } else {
                                if(isnotify)
                                Notification.warning(rep.data.message)
                            }
                        }
                    }
                } else {
                    if(isnotify)
                    Notification.success("操作成功")
                }
            })
            .catch(function (rep) {
              console.log(rep)
                Notification.error("网络异常")
            });
    },
    authedpost:function(url, paramater, call, errcall,isnotify) {
        paramater.authtoken = webstore.getAuthKey();
        return this.post(url, paramater, call, errcall,isnotify);
    },
    postform:function(url, data, call, errcall,isnotify) {
        data = qs.stringify(data);
        return this.post(url, data, call, errcall,isnotify);
    },
    authedpostform:function(url, data, call, errcall,isnotify) {
        data.authtoken =  webstore.getAuthKey();
        return this.postform(url, data, call, errcall,isnotify);
    }
}
export default httphelper
