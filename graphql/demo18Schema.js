type PremiumAdjustment {
  Product_Name: String!
  Report_Period: String!
  Status: String!
  Last_Update: String!
  Period_Ending: String!
  Adjustment_Type_to_the_Credit_Union: String!
  Comment: String!
  Total_Borrower_Fees_: Float!
  CU_Retail_Rate: Float!
  Protected_Loan_Amount: Float!
  Pay_Rate: Float!
  Premium_Due: Float!
  Total_Amount: Float!
}

type SinglePremiumCertificateReturn {
  certificateDetails: [PremiumAdjustment]!
}

input PremiumAdjustmentInput {
  Product_Name: String!
  Report_Period: String!
  Status: String!
  Last_Update: String!
  Period_Ending: String!
  Adjustment_Type_to_the_Credit_Union: String!
  Comment: String!
  Total_Borrower_Fees_: Float!
  CU_Retail_Rate: Float!
  Protected_Loan_Amount: Float!
  Pay_Rate: Float!
  Premium_Due: Float!
  Total_Amount: Float!
}

type Query {
  getPremiumAdjustments: [PremiumAdjustment]!
}

type Mutation {
  createPremiumAdjustment(input: PremiumAdjustmentInput!): PremiumAdjustment!
}