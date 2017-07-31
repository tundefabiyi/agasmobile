export enum AGASRequestType {
    FinancialAggregateQuery = 1,
    BalanceSheet = 2,
    FinancialPerformance = 3,
    CashFlowStatement = 4,
    StatementOfChangesInNetAssets = 5
}
export class AGASRequestInfo {
    id: string;
    userid: string;
    aGASRequestType: string;
    datetime: string;
    displaytime: string;
    param: any;
}
export enum GPFSStatementType {
    CashFlow = 1,
    BalanceSheet = 2,
    FinancialPerformance = 3    
}