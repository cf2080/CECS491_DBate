﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ManayerLayer.Password
{
    public interface IHashFunction
    {
        /// <summary>
        /// Get a hashed string from a value.
        /// </summary>
        /// <param name="passedValue"></param>
        /// <returns>A hashed string</returns>
        string StringHash(string passedValue);
    }
}