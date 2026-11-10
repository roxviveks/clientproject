import React from "react";

const Terms = () => {
   window.scrollTo({top:0, behavior:'smooth'})
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
      <span id="payment"></span>
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
          <div className="asidesticky">
            <p className="asidep">ON THIS PAGE</p>
            <ol className="asideol">
              <a href="#payment" className="asideli">
                <li className="asideli"> Payments and orders</li>
              </a>
              <a href="#ship" className="asideli">
                <li className="asideli">Shipping</li>
              </a>
              <a href="#cancel" className="asideli">
                <li className="asideli">Cancellation, returns and refunds</li>
              </a>
              <a href="#coach" className="asideli">
                <li className="asideli">Coaching bookings</li>
              </a>
              <a className="asideli" href="#subscribe">
                <li className="asideli">Subscriptions and membership</li>
              </a>
              <a href="#acount" className="asideli">
                <li className="asideli">Accounts and privacy</li>
              </a>
              <a href="#customer" className="asideli">
                <li className="asideli">Customer responsibilities</li>
              </a>
              <a className="asideli" href="#fitnes">
                <li className="asideli">Fitness safety disclaimer</li>
              </a>
              <a className="asideli" href="#equipment">
                <li className="asideli">Equipment warnings</li>
              </a>
              <a href="#change" className="asideli">
                <li className="asideli">Liability and changes</li>
              </a>
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
        </div>
        <div className="termscontent">
          <div className="contenth2">1. PAYMENTS AND ORDERS</div>
          <p className="contentp">
            Prices are shown in INR and may change before an order is confirmed.
            An order is accepted after successful payment and confirmation.
            Payments run through a secure payment provider; DEOL FITNESS does
            not store full card details.
            <span id="ship"></span>
          </p>
          <br />
          <div className="contenth2">2. SHIPPING</div>
          <p className="contentp">
            Delivery times and charges are shown at checkout. Customers must
            give a correct address. Risk passes to the customer on delivery.
            Order tracking is available in the account.
            <span id="cancel"></span>
          </p>
          <br />
          <div className="contenth2">3. CANCELLATION, RETURNS AND REFUNDS</div>
          <p className="contentp">
            Orders can be cancelled before dispatch. Unused items in original
            packaging may be returned within the return period shown on the
            product page. Damaged or wrong items are replaced or refunded.
            Refunds go back to the original payment method after the returned
            item is checked.
            <span id="coach"></span>
          </p>
          <br />
          <div className="contenth2">4. COACHING BOOKINGS</div>
          <p className="contentp">
            Consultations and coaching packages must be booked and paid for in
            advance. Sessions can be rescheduled within the notice period stated
            at booking. Late cancellations or missed sessions may not be
            refunded. The trainer may reschedule with notice.
            <span id="subscribe"></span>
          </p>
          <br />
          <div className="contenth2">5. SUBSCRIPTIONS AND MEMBERSHIP</div>
          <p className="contentp">
            If membership plans are offered, they renew at the stated interval
            until cancelled. Cancellation takes effect at the end of the paid
            period. Prices and renewal terms are shown before purchase.
            <span id="acount"></span>
          </p>
          <br />
          <div className="contenth2">6. ACCOUNTS AND PRIVACY</div>
          <p className="contentp">
            Customers must give true details and keep passwords private.
            Personal data is used only for orders, coaching, support and legal
            needs, and is not sold. Customers can ask to view, correct or delete
            their data.
            <span id="customer"></span>
          </p>
          <br />
          <div className="contenth2">7. CUSTOMER RESPONSIBILITIES</div>
          <p className="contentp">
            Use equipment as intended, within the manufacturer age guidance and
            maximum rated load. Check equipment before each use. Do not misuse
            the website or share account access.
            <span id="fitnes"></span>
          </p>
          <br />
          <div className="contenth2">8. FITNESS SAFETY DISCLAIMER</div>
          <p className="contentp">
            Exercise carries risk. Check with a doctor before starting any
            program, especially with a health condition, injury or pregnancy.
            Stop if you feel pain, dizziness or discomfort. Workout plans are
            general guidance and not medical advice.
            <span id="equipment"></span>
          </p>
          <br />
          <div className="contenth2">9. EQUIPMENT WARNINGS</div>
          <p className="contentp">
            Never exceed the maximum rated load. Secure collars and plates
            correctly. Keep equipment away from children unless the product age
            guidance allows use under supervision. Replace worn or damaged
            items.
            <span id="change"></span>
          </p>
          <br />
          <div className="contenth2">10. LIABILITY AND CHANGES</div>
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
