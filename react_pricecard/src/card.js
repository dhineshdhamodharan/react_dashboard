import React from "react";
export default function Card(props) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">
            {props.data.packageName}
          </h5>
          <h6 class="card-price text-center">
            {props.data.currency}
            {props.data.price}
            <span class="period">/{props.data.period}</span>
          </h6>
          <hr />
          <ul class="fa-ul">
            {props.data.features.map((plan) => {
              return (
                <li className={plan.isEnabled ? "" : "text-muted"}>
                  <span class="fa-li">
                    <i
                      class={`fas ${plan.isEnabled ? "fa-check" : "fa-times"}`}
                    ></i>
                  </span>
                  {plan.isBold ? (
                    <strong>{plan.name}</strong>
                  ) : (
                    <span>{plan.name}</span>
                  )}
                </li>
              );
            })}
          </ul>
          <div class="d-grid">
            <button
              class="btn btn-primary text-uppercase"
              onClick={() => {
                props.handleSubscription(props.data.packageName);
              }}
            >
              Select a Plan
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
