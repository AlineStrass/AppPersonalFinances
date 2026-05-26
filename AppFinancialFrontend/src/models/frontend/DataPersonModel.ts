import type { BankAccountModel } from "./BankAccountModel";

export type DataPersonModel = {
    id: number;
    name: string;
    lastname: string;
    cpf: string;
    bankAccount: BankAccountModel;
}
