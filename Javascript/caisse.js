function checkCashRegister(price, cash, cid) {
    let changeDue = cash - price;
    let totalCid = cid.reduce((sum, curr) => sum + curr[1], 0);
    totalCid = Math.round(totalCid * 100) / 100;

    if (totalCid === changeDue) {
        return { status: "CLOSED", change: cid };
    }

    if (totalCid < changeDue) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    const moneyUnits = [
        ["ONE HUNDRED", 100.0],
        ["TWENTY", 20.0],
        ["TEN", 10.0],
        ["FIVE", 5.0],
        ["ONE", 1.0],
        ["QUARTER", 0.25],
        ["DIME", 0.1],
        ["NICKEL", 0.05],
        ["PENNY", 0.01]
    ];

    let change = [];
    cid.reverse();

    for (let i = 0; i < moneyUnits.length; i++) {
        let unitName = moneyUnits[i][0];
        let unitValue = moneyUnits[i][1];
        let unitAvailable = cid[i][1];

        if (changeDue >= unitValue) {
            let amountToGive = 0;
            while (changeDue >= unitValue && unitAvailable > 0) {
                amountToGive += unitValue;
                unitAvailable -= unitValue;
                changeDue -= unitValue;

                // Évite les erreurs de flottants
                changeDue = Math.round(changeDue * 100) / 100;
            }

            if (amountToGive > 0) {
                change.push([unitName, amountToGive]);
            }
        }
    }

    if (changeDue > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    return { status: "OPEN", change };
}