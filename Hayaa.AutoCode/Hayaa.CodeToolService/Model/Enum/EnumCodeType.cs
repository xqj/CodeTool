﻿using System;

namespace Hayaa.CodeToolService
{
    /// <summary>
    /// 代码生成类型
    /// </summary>
    [Flags]
    public enum CodeType
    {
        /// <summary>
        /// 数据通道
        /// </summary>
        Dao=1,
        /// <summary>
        /// 服务级别
        /// </summary>
        Service=2,
        /// <summary>
        /// 视图服务级别
        /// </summary>
        ViewService=4,
        /// <summary>
        /// 客户端服务级别
        /// </summary>
        ClientService=8,
        /// <summary>
        /// 客户端视图
        /// </summary>
        ClientView=16
    }
}