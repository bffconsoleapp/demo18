```graphql
codegen-start
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
codegen-end
```

```javascript
codegen-start-resolver
const sampleData = [
  {
    Product_Name: "Product A",
    Report_Period: "2023-Q1",
    Status: "Active",
    Last_Update: "2023-01-15",
    Period_Ending: "2023-03-31",
    Adjustment_Type_to_the_Credit_Union: "Type 1",
    Comment: "Initial Entry",
    Total_Borrower_Fees_: 123.45,
    CU_Retail_Rate: 3.5,
    Protected_Loan_Amount: 5000.00,
    Pay_Rate: 4.0,
    Premium_Due: 100.00,
    Total_Amount: 5123.45
  }
];

const resolvers = {
  Query: {
    getPremiumAdjustments: () => {
      return sampleData;
    },
  },
  Mutation: {
    createPremiumAdjustment: (_, { input }) => {
      const newAdjustment = { ...input };
      sampleData.push(newAdjustment);
      return newAdjustment;
    },
  },
};

module.exports = { resolvers };
codegen-end-resolver
```