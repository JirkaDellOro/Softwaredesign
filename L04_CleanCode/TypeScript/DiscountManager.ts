enum AccountStatus
{
    NotRegistered,
    SimpleCustomer,
    ValuableCustomer,
    MostValuableCustomer
}

class DiscountManager
{
    public static readonly DiscountForSimpleCustomers: number = 0.1;
    public static readonly DiscountForValuableCustomers: number = 0.3;
    public static readonly DiscountForMostValuableCustomers: number = 0.5;

    public static readonly MaximumDiscountForLoyality: number = 5;

    public static ApplyDiscountForAccountStatus(price: number, discountRatio: number): number
    {
        return price - (discountRatio * price);
    }

    public static ApplyDiscountForTimeOfHavingAccount(price: number,timeOfHavingAccountInYears: number): number
    {
        let discountForLoyaltyInPercentage: number = (timeOfHavingAccountInYears > DiscountManager.MaximumDiscountForLoyality) ? DiscountManager.MaximumDiscountForLoyality/100 : timeOfHavingAccountInYears/100;
        return price - (discountForLoyaltyInPercentage * price);
    }

    public static ApplyDiscount(price: number, accountStatus: AccountStatus, timeOfHavingAccountInYears: number): number
    {
        let priceAfterDiscount: number = 0;
        switch (accountStatus)
        {
            case AccountStatus.NotRegistered:
                priceAfterDiscount = price;
                break;
            case AccountStatus.SimpleCustomer:
                priceAfterDiscount = DiscountManager.ApplyDiscountForAccountStatus(price, DiscountManager.DiscountForSimpleCustomers);
                break;
            case AccountStatus.ValuableCustomer:
                priceAfterDiscount = DiscountManager.ApplyDiscountForAccountStatus(price,  DiscountManager.DiscountForValuableCustomers);
                break;
            case AccountStatus.MostValuableCustomer:
                priceAfterDiscount = DiscountManager.ApplyDiscountForAccountStatus(price,  DiscountManager.DiscountForMostValuableCustomers);
                break;
            default:
                throw new Error('Not implementet');
        }
        priceAfterDiscount = DiscountManager.ApplyDiscountForTimeOfHavingAccount(priceAfterDiscount, timeOfHavingAccountInYears);
        return priceAfterDiscount;
    }
}