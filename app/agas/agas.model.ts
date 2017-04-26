export enum AGASRequestType {
    FinancialAggregateQuery = 1,
    BalanceSheet = 2,
    FinancialPerformance = 3,
    CashFlowStatement = 4
}
export class AGASRequestInfo {
    id: string;
    userid: string;
    aGASRequestType: string;
    datetime: string;
    displaytime: string;
    param: any;
}