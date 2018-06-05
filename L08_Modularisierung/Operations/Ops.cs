using System;
using System.Collections.Generic;

namespace Operations
{
    public class Ops
    {
        public static int Power(int a, int exp)
        {
            int result = 1;
            for(int i=0; i<exp; i++)
                result *= a;
            return result;
        }

        public static int GreatestCommonDenominator(int a, int b)
        {
            if (a < b)
            {
                int tmp = a; a=b; b=tmp;
            }
            while (b > 0)
            {
                int c = a % b; a = b; b = c;
            }
            return a;
        }
    }
}
