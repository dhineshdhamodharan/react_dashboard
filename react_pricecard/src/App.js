import logo from "./logo.svg";
import "./App.css";
import Card from "./card";

function App() {
  let details = [
    {
      packageName: "Free",
      price: 0,
      currency: "$",
      period: "Monthly",
      features: [
        {
          name: "Single User",
          isEnabled: true,
          isBold: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: false,
        },
        {
          name: "Deticated Phone Support",
          isEnabled: false,
        },
        {
          name: "Free Subdomain",
          isEnabled: false,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      packageName: "PLUS",
      price: 9,
      currency: "$",
      period: "Monthly",
      features: [
        {
          name: "5 Users",
          isEnabled: true,
          isBold: true,
        },
        {
          name: "50GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Deticated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: false,
        },
      ],
    },
    {
      packageName: "PRO",
      price: 49,
      currency: "$",
      period: "Monthly",
      features: [
        {
          name: "Unlimited Users",
          isEnabled: true,
          isBold: true,
        },
        {
          name: "5GB Storage",
          isEnabled: true,
        },
        {
          name: "Unlimited Public Projects",
          isEnabled: true,
        },
        {
          name: "Community Access",
          isEnabled: true,
        },
        {
          name: "Unlimited Private Projects",
          isEnabled: true,
        },
        {
          name: "Deticated Phone Support",
          isEnabled: true,
        },
        {
          name: "Free Subdomain",
          isEnabled: true,
        },
        {
          name: "Monthly Status Reports",
          isEnabled: true,
        },
      ],
    },
  ];
  let onSubscribe = (plan) => {
    alert(`Plan ${plan} is Subscribed`);
  };
  return (
    <section class="pricing py-5">
      <div class="container">
        <div class="row">
          {details.map((card) => {
            return <Card data={card} handleSubscription={onSubscribe}></Card>;
          })}
        </div>
      </div>
    </section>
  );
}

export default App;
