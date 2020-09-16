namespace L04_CleanCode
{
    class Class1
    {
        public static Calculate(amount: number, type: number, years: number): number
        {
            let result: number = 0;
            let disc: number = (years > 5) ? 5/100 : years/100; 
            if (type == 1)
            {
                result = amount;
            }
            else if (type == 2)
            {
                result = (amount - (0.1 * amount)) - disc * (amount - (0.1 * amount));
            }
            else if (type == 3)
            {
                result = (0.7 * amount) - disc * (0.7 * amount);
            }
            else if (type == 4)
            {
                result = (amount - (0.5 * amount)) - disc * (amount - (0.5 * amount));
            }
            return result;
        }
    }    

    console.log("Result: " + Class1.Calculate(125, 2, 5));
}
