import { PrimitiveType } from './AttributeType'

export interface Input{
    AppId:string,
    BranchName:string,
    Module: string,
    Entities: [
        {
            Name: string,
            NonPersistent: boolean,
            Attributes: {
                FirstName: string,
                LastName: string,
                NickName: {
                    Type: string,
                    Required: boolean,
                    MaxLength: number
                },
                Email: {
                    Type: PrimitiveType,
                    Required: boolean,
                    Unique: boolean
                },
                Age: {
                    Type: PrimitiveType,
                    MinValue: number
                },
                Membership: {
                    Type: PrimitiveType,
                    Enumeration: string
                }
            }
        }
    ],
    Enumerations: [
        {
            Name: string,
            Values: string[]
        }
    ]
}