import React from "react";

const Terms = () => {
  return (
    <div className="termsmains">
      <div className="divterms">
        <p className="topterms">CLEAR EXPECTATIONS. RESPONSIBLE TRAINING.</p>
        <br />
        <h1 className="termsh1">TERMS AND CONDITIONS</h1> <br />
        <p className="termsp">
          DEOL FITNESS website, equipment store and coaching services.
        </p>
        <br />
      </div>
      <div className="termsnote">
        <div className="warningpic"></div>

        <p className="warnp">
          <span className="draft">DRAFT / TEMPLATE — PENDING LEGAL REVIEW</span>
          <br />
          These terms require lawyer review before launch. Return periods,
          rescheduling notice periods and owner contact details must be
          completed before customers can purchase or book
        </p>
      </div>
      <div className="termsbody">
        <div className="termsaside">
          <p className="asidep">ON THIS PAGE</p>
          <ol className="asideol">
            <li className="asideli"> Payments and orders</li>
            <li className="asideli">Shipping</li>
            <li className="asideli">Cancellation, returns and refunds</li>
            <li className="asideli">Coaching bookings</li>
            <li className="asideli">Subscriptions and membership</li>
            <li className="asideli">Accounts and privacy</li>
            <li className="asideli">Customer responsibilities</li>
            <li className="asideli">Fitness safety disclaimer</li>
            <li className="asideli">Equipment warnings</li>
            <li className="asideli">Liability and changes</li>
          </ol>
          <div className="asidediv">
            <div className="bol">BEFORE LAUNCH</div>
            <br />
            <p className="ulp">Owner to confirm:</p>
            <ul className="asideul" type="disc">
              <li className="asideuli">Return periods</li>
              <li className="asideuli">Rescheduling notice periods</li>
              <li className="asideuli">Owner contact details</li>
            </ul>
            <p className="ulp">
              No return or notice period has been assumed in this preview.
            </p>
          </div>
        </div>
        <div className="termscontent">
          <h1 className="contenth2">PAYMENTS AND ORDERS</h1>
          <p className="contentp">
            Prices are shown in INR and may change before an order is confirmed.
            An order is accepted after successful payment and confirmation.
            Payments run through a secure payment provider; DEOL FITNESS does
            not store full card details.
          </p>
          <br />
          <h1 className="contenth2">SHIPPING</h1>
          <p className="contentp">
            Delivery times and charges are shown at checkout. Customers must
            give a correct address. Risk passes to the customer on delivery.
            Order tracking is available in the account.
          </p>
          <br />
          <h1 className="contenth2">CANCELLATION, RETURNS AND REFUNDS</h1>
          <p className="contentp">
            Orders can be cancelled before dispatch. Unused items in original
            packaging may be returned within the return period shown on the
            product page. Damaged or wrong items are replaced or refunded.
            Refunds go back to the original payment method after the returned
            item is checked.
          </p>
          <br />
          <h1 className="contenth2">COACHING BOOKINGS</h1>
          <p className="contentp">
            Consultations and coaching packages must be booked and paid for in
            advance. Sessions can be rescheduled within the notice period stated
            at booking. Late cancellations or missed sessions may not be
            refunded. The trainer may reschedule with notice.
          </p>
          <br />
          <h1 className="contenth2">SUBSCRIPTIONS AND MEMBERSHIP</h1>
          <p className="contentp">
            If membership plans are offered, they renew at the stated interval
            until cancelled. Cancellation takes effect at the end of the paid
            period. Prices and renewal terms are shown before purchase.
          </p>
          <br />
          <h1 className="contenth2">ACCOUNTS AND PRIVACY</h1>
          <p className="contentp">
            Customers must give true details and keep passwords private.
            Personal data is used only for orders, coaching, support and legal
            needs, and is not sold. Customers can ask to view, correct or delete
            their data.
          </p>
          <br />
          <h1 className="contenth2">CUSTOMER RESPONSIBILITIES</h1>
          <p className="contentp">
            Use equipment as intended, within the manufacturer age guidance and
            maximum rated load. Check equipment before each use. Do not misuse
            the website or share account access.
          </p>
          <br />
          <h1 className="contenth2">FITNESS SAFETY DISCLAIMER</h1>
          <p className="contentp">
            Exercise carries risk. Check with a doctor before starting any
            program, especially with a health condition, injury or pregnancy.
            Stop if you feel pain, dizziness or discomfort. Workout plans are
            general guidance and not medical advice.
          </p>
          <br />
          <h1 className="contenth2">EQUIPMENT WARNINGS</h1>
          <p className="contentp">
            Never exceed the maximum rated load. Secure collars and plates
            correctly. Keep equipment away from children unless the product age
            guidance allows use under supervision. Replace worn or damaged
            items.
          </p>
          <br />
          <h1 className="contenth2">LIABILITY AND CHANGES</h1>
          <p className="contentp">
            To the extent allowed by law, DEOL FITNESS is not liable for injury
            or loss from misuse, ignoring warnings or ignoring professional
            advice. These terms may be updated, and the version on the website
            applies.
          </p>
          <br />
          <div className="template">
            <p className="templatep">TEMPLATE NOTE</p>
            <p className="templatep1">
              Have a lawyer review these terms and fill in return periods,
              notice periods and contact details before launch. 
              <br />
              <br />
              Customer support covers orders, returns, product safety and
              coaching bookings. Contact details are pending owner confirmation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;
