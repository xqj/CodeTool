﻿using System;
using System.Collections.Generic;
using System.Text;

namespace Hayaa.CodeToolService
{
    /// <summary>
    /// 解决方案模板
    /// </summary>
    public class SolutinTemplate
    {
        /// <summary>
        /// 展示信息
        /// </summary>
        public String Title { set; get; }
        /// <summary>
        /// 解决方案模板
        /// </summary>
        public List<CodeTemplate> SolutinTemplates { set; get; }
        /// <summary>
        /// 模板类型检查
        /// 是否有重复类型模板
        /// true表示没有false表示有重复类型模板
        /// </summary>
       
        public Boolean TemplateTypeCheck
        {
            get
            {
                Boolean templateTypeCheck = true;
                if (this.SolutinTemplates != null)
                {

                    Dictionary<CodeType, int> countor = new Dictionary<CodeType, int>();
                   foreach(var a in this.SolutinTemplates)
                    {
                        if (countor.ContainsKey(a.GenCodeType)) return false;
                        else countor.Add(a.GenCodeType,1);
                    }
                }
                return templateTypeCheck;
            }
        }
    }
}
