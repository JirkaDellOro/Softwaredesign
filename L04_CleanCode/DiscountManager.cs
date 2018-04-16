using System;

public class DiscountManager
{
    public static decimal ApplyDiscount(decimal price, AccountStatus accountStatus, int timeOfHavingAccountInYears)
    {
        decimal priceAfterDiscount = 0;
        switch (accountStatus)
        {
            case AccountStatus.NotRegistered:
                priceAfterDiscount = price;
                break;
            case AccountStatus.SimpleCustomer:
                priceAfterDiscount = ApplyDiscountForAccountStatus(price, DiscountForSimpleCustomers);
                break;
            case AccountStatus.ValuableCustomer:
                priceAfterDiscount = ApplyDiscountForAccountStatus(price, DiscountForValuableCustomers);
                break;
            case AccountStatus.MostValuableCustomer:
                priceAfterDiscount = ApplyDiscountForAccountStatus(price, DiscountForMostValuableCustomers);
                break;
            default:
                throw new NotImplementedException();
        }
        priceAfterDiscount = ApplyDiscountForTimeOfHavingAccount(priceAfterDiscount, timeOfHavingAccountInYears);
        return priceAfterDiscount;
    }

    public enum AccountStatus
    {
        NotRegistered,
        SimpleCustomer,
        ValuableCustomer,
        MostValuableCustomer
    }

    public const decimal DiscountForSimpleCustomers = 0.1m;
    public const decimal DiscountForValuableCustomers = 0.3m;
    public const decimal DiscountForMostValuableCustomers = 0.5m;

    public const int MaximumDiscountForLoyality = 5;

    public static decimal ApplyDiscountForAccountStatus(decimal price, decimal discountRatio)
    {
        return price - (discountRatio * price);
    }
    
    public static decimal ApplyDiscountForTimeOfHavingAccount(decimal price, int timeOfHavingAccountInYears)
    {
        decimal discountForLoyaltyInPercentage = (timeOfHavingAccountInYears > MaximumDiscountForLoyality) ? (decimal)MaximumDiscountForLoyality/100 : (decimal)timeOfHavingAccountInYears/100;
        return price - (discountForLoyaltyInPercentage * price);
    }
}