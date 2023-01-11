import React from "react";
import config from "../utils/config";

import { 
  IDashboard, 
  IDecisionModel,
  IFeescharges,
  IFeespricing,
  IGuarantors,
  IKarma,
  ILoan,
  ILoanProducts,
  IOrganization,
  IPreferences,
  IReports,
  ISavings,
  ISavingsProduct,
  IServices,
  IServicesAccount,
  ISettlements,
  ITransaction,
  IUser,
  IWhitelist,
  IAudit,
  IDown
} from "./icons";

const {
  pageUrls
} = config;

export const linksDash = [
  {
    authorizedUsers: ["all"],
    name: "Switch Organization",
    icon: <img src={IOrganization} alt="icon" 
    className = "mx-5 w-[20px]"
    />,
    iconTwo: <img src={IDown} alt="icon" size = {
      "24px"
    }
    className = "mx-5 w-[16px]"
    />
  }, 
  {
    authorizedUsers: ["all"],
    name: "Dashboard",
    url: pageUrls.dashboard,
    icon: <img src={IDashboard} alt="icon" size = {
      "24px"
    }
    className = "mx-5"
    />
  }
]

export const links = [
  {
    authorizedUsers: ["all"],
    name: 'User',
    url: pageUrls.userDetails,
    icon: <img src={IUser} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: 'Guarantors',
    url: pageUrls.guarantors,
    authorizedUsers: ["all"],
    icon: <img src={IGuarantors} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },

  {
    authorizedUsers: ["all"],
    name: "Loans",
    url: pageUrls.loans,
    icon: <img src={ILoan} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    authorizedUsers: ["all"],
    name: "Decision Model",
    url: pageUrls.decisionModel,
    icon: <img src={IDecisionModel} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Savings",
    url: pageUrls.savings,
    icon: <img src={ISavings} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Loan Request",
    url: pageUrls.loanRequest,
    icon: <img src={ILoanProducts} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Whitelist",
    url: pageUrls.whitelist,
    icon: <img src={IWhitelist} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Karma",
    url: pageUrls.karma,
    icon: <img src={IKarma} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  }
]

export const linksTwo = [
  {
    name: "Organization",
    url: pageUrls.organization,
    icon: <img src={IOrganization} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Loan Produts",
    url: pageUrls.loanProduts,
    icon: <img src={ILoanProducts} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Savings Products",
    url: pageUrls.savingsProducts,
    icon: <img src={ISavingsProduct} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Fees And Charges",
    url: pageUrls.feesAndCharges,
    icon: <img src={IFeescharges} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Transactions",
    url: pageUrls.transactions,
    icon: <img src={ITransaction} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Services",
    url: pageUrls.services,
    icon: <img src={IServices} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Services Account",
    url: pageUrls.servicesAccount,
    icon: <img src={IServicesAccount} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Settlement",
    url: pageUrls.settlement,
    icon: <img src={ISettlements} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Reports",
    url: pageUrls.reports,
    icon: <img src={IReports} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
]

export const linksThree = [
  {
    name: "Preference",
    url: pageUrls.preference,
    icon: <img src={IPreferences} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Fees And Pricing",
    url: pageUrls.feesAndPricing,
    icon: <img src={IFeespricing} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  },
  {
    name: "Audit Logs",
    url: pageUrls.auditLogs,
    icon: <img src={IAudit} alt="icon" size = {
      "24px"
    }
    className = "mx-5" /> ,
  }
]

export default links;