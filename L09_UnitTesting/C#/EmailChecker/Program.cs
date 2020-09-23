using System;

namespace EmailChecker
{
    public class Program
    {

        public static bool IsEmailAddress(string emailAddress)
        {
            int iAt = emailAddress.IndexOf('@');
            int iDot = emailAddress.LastIndexOf('.');
            return (iAt > 0 && iDot > iAt);
        }        

        static void Main(string[] args)
        {
            string inp = null;
            do
            {
                Console.Write("Enter Email-Address >");
                inp = Console.ReadLine();
                if (IsEmailAddress(inp))
                    Console.WriteLine("Well-formed email address.");
                else
                    Console.WriteLine("Not an email address. Try again!");
            } while (inp.ToLower() != "exit");
        }
    }
}
