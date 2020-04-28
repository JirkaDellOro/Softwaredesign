using System;

namespace L01
{
    class Program
    {
        static void Main(string[] args)
        {
            int i=1;
            switch(i) {
                case 0:
                case 1:
                    Console.WriteLine("i = 0 or 1");
                    goto case 2;
                case 2:
                    Console.WriteLine("case 2");
                    goto default;
                default:
                    break;
            }
        }
    }
}
