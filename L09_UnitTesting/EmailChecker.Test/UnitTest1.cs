using System;
using Xunit;

namespace EmailChecker.Test
{
    public class UnitTest1
    {
        [Fact]
        public void Test1()
        {
            bool result = EmailChecker.Program.IsEmailAddress("me@wonz.com");
            Assert.True(result, "Korrekte Email-Adresse");
        }

        [Fact]
        public void Test2()
        {
            bool result = EmailChecker.Program.IsEmailAddress("me@wo!nz.com");
            Assert.False(result, "Ausrufezeichen verboten");
        }
    }
}
