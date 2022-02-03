import React, { useEffect } from "react";
import { HashLinkStyled } from "./PrivacyPolicyStyled";
import { useQuery } from "../../../hooks";

const Terms = () => {
  const query = useQuery();
  const id = query.get("id");

  const getElement = (id) => {
    const el = document.getElementById(id);
    el.scrollIntoView({
      block: "center",
      behavior: "smooth",
    });
  };

  useEffect(() => {
    id && getElement(id);
  }, [id]);

  return (
    <>
      <p>
        Section 23 of these Terms contains an arbitration agreement and class
        action waiver that apply to all claims brought against Teache in the
        United States. Please read them carefully.
      </p>
      <br />
      <br />
      <p>Last Updated: January 30, 2022</p>
      <br />
      <br />
      <p>Thank you for using Teache!</p>
      <br />
      <br />
      <p>
        These Terms of Service (“<span>Terms</span>”) are a binding legal
        agreement between you and Teache that governs your use of the websites,
        applications, and other offerings from Teache (collectively, the “
        <span>Teache Platform</span>”). When used in these Terms, “
        <span>Teache</span>,” “<span>we</span>,” “<span>us</span>,” or “
        <span>our</span>” refers to the Teache entity, set out on Schedule
        1, with whom you are contracting.
      </p>
      <br />
      <br />
      <p>
        The Teache Platform offers an online venue that enables users (“
        <span>Members</span>”) to publish, offer, search for, and book services.
        Members who publish and offer services are “<span>Instructors</span>”
        and Members who search for, book, or use services are “
        <span>Users</span>.” Instructors offer classes (“<span>Classes</span>”)
        and other services (collectively referred to as “
        <span>Instructor Services</span>;” each individual Instructor Service
        offering is referred to as a “<span>Listing</span>”). You must register
        an account to access and use many features of the Teache Platform, and
        you must keep your account information accurate. As the provider of the
        Teache Platform, Teache does not own, control, offer, or manage any
        Listings or Instructor Services. Teache is not a party to the contracts
        concluded directly between Instructors and Users, nor is Teache an
        insurer. Teache is not acting as an agent in any capacity for any
        Member, except as specified in the Payments Terms of Service (“
        <span>Payment Terms</span>
        ”). To learn more about Teache’s role, see Section 16.
      </p>
      <br />
      <br />
      <p>
        We maintain other terms and policies that supplement these Terms, such
        as our Privacy Policy, which describes our collection and use of
        personal data, and our Payments Terms, which govern any payment services
        provided to Members by the Teache payment entities.
      </p>
      <br />
      <br />
      <p>
        If you are an instructor, you are responsible for understanding and
        complying with all laws, rules, regulations, and contracts with third
        parties that apply to your Instructor Services.
      </p>
      <br />
      <br />
      <strong>Table of Contents</strong>
      <p>
        <span>User Terms</span>
      </p>
      <ol>
        <li>
          <HashLinkStyled to="?tab=terms&id=1">Our Mission.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=2">
            Searching and Booking on Teache.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=3">
            Cancellations, Class Issues, Refunds, and Booking Modifications.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=4">
            Your Responsibilities and Assumption of Risk.
          </HashLinkStyled>
        </li>
      </ol>
      <br />
      <br />
      <p>
        <span>Instructor Terms</span>
      </p>
      <ol start={5}>
        <li>
          <HashLinkStyled to="?tab=terms&id=5">
            Instructing on Teache.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=6">
            Managing Your Listing.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=7">
            Cancellations, Class Issues, and Booking Modifications.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=8">Taxes.</HashLinkStyled>
        </li>
      </ol>
      <br />
      <br />
      <p>
        <span>General Terms</span>
      </p>
      <ol start={9}>
        <li>
          <HashLinkStyled to="?tab=terms&id=9">Reviews.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=10">Content.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=11">Fees.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=12">
            Teache Platform Rules.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=13">
            Termination, Suspension, and Other Measures.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=14">Modification.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=15">
            Resolving Complaints and Damage Claims.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=16">Teache’s Role.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=17">
            Member Accounts.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=18">
            Disclaimer of Warranties.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=19">
            Limitations on Liability.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=20">
            Indemnification.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=21">
            Contracting Entities.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=22">
            United States Governing Law and Venue.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=23">
            United States Dispute Resolution and Arbitration Agreement.
          </HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=24">Miscellaneous.</HashLinkStyled>
        </li>
        <li>
          <HashLinkStyled to="?tab=terms&id=schedule">
            Schedule 1 - Contracting Entities
          </HashLinkStyled>
        </li>
      </ol>
      <br />
      <br />
      <h2>User Terms</h2>
      <br />
      <br />
      <strong id="1">1. Our Mission.</strong>
      <p>
        Our mission is to create a world where communities work together to
        facilitate knowledge. From mathematics to cave diving, you can browse
        through millions of Classes and find the ones that pique your interest.
        Learn more about a Class by reviewing the description and photos, the
        Instructor profile, and Users reviews. If you have questions, just
        message the Instructor.
      </p>
      <br />
      <br />
      <strong id="2">2. Searching and Booking on Teache.</strong>
      <br />
      <br />
      <strong className="indent">2.1 Searching.</strong>
      <p>
        You can search for Instructors by using criteria such as the type of
        Class, location, dates offered, and time slots available. You can also
        use filters to refine your search results. Search results are based on
        their relevance to your search and other criteria. Relevance considers
        factors such as price, availability, Reviews, customer service and
        cancellation history, popularity, previous classes and saved Listings,
        Instructor requirements (e.g., special equipment), and more.
      </p>
      <br />
      <br />
      <strong className="indent">2.2 Booking.</strong>
      <p>
        When you book a Class, you are agreeing to pay all charges for your
        booking, including the Class price, applicable fees such as Teache’s
        service fee, taxes, and any other items identified during checkout
        (collectively, “<span>Total Price</span>”). When you receive a class
        booking confirmation, a contract for Instructor Services (sometimes
        called a reservation in these Terms) is formed directly between you and
        your Instructor. The cancellation policy and any other rules, standards,
        policies, or requirements identified in the Listing or during checkout
        form part of your contract with the Instructor. Be aware that some
        Instructors work with a co-Instructor or as part of a team to provide
        their Instructor Services.
      </p>
      <br />
      <br />
      <strong className="indent">2.3 Class Reservations.</strong>
      <p>
        A Class reservation is a limited license to enter the Class location and
        participate in a Class. You are responsible for bringing specific
        equipment required for the class as mentioned in the Class listing. You
        are responsible for confirming that you, and anyone you invite, meet
        minimum age, proficiency, fitness, or other requirements. You are
        responsible for informing the Instructor of any medical or physical
        conditions, or other circumstances that may impact your ability to
        participate and attend, the Instructor Class. Except where expressly
        authorized, you may not allow any person to join a booked Class unless
        they are included as an additional User during the booking process.
      </p>
      <br />
      <br />
      <p>
        in the event that (i) it is reasonably necessary, (ii) you do not follow
        the Instructor’s class rules, and (iii) it is consistent with applicable
        law. If you don’t leave the class location after being requested to do
        so by the instructor, the instructor has the right to make you leave in
        a manner consistent with applicable law, including by imposing
        reasonable penalties.
      </p>
      <br />
      <br />
      <strong id="3">
        3. Cancellations, Class Issues, Refunds, and Booking Modifications.
      </strong>
      <br />
      <br />
      <strong className="indent">
        3.1 Cancellations, Class Issues, and Refunds.
      </strong>
      <p>
        In general, if, as a User, you cancel a Class reservation, the amount
        refunded to you is determined by the cancellation policy that applies to
        that reservation. But, in certain situations, other policies take
        precedence and determine what amount is refunded to you. If something
        outside your control forces you to cancel a reservation, you may be
        eligible for a partial or full refund under our Extenuating
        Circumstances Policy. If the Instructor cancels, or you experience a
        Class Issue (as defined in our User Refund Policy), you may be eligible
        for assistance with rebooking a Class assistance or for a partial or
        full refund under the User Refund Policy.
      </p>
      <br />
      <br />
      <strong className="indent">3.2 Booking Modifications.</strong>
      <p>
        Users and Instructors are responsible for any booking modifications they
        agree to make via the Teache Platform or which they direct Teache
        customer service to make on their behalf ("
        <span>Booking Modifications</span>"); they agree to pay any additional
        amounts, fees, or taxes associated with any Booking Modification.
      </p>
      <br />
      <br />
      <strong id="4">4. Your Responsibilities and Assumption of Risk.</strong>
      <br />
      <br />
      <strong className="indent">4.1 Your Responsibilities.</strong>
      <p>
        You are responsible and liable for your own acts and omissions and are
        also responsible for the acts and omissions of anyone you invite to join
        or provide access to any Class. For example, this means: (i) you are
        responsible for any damage you do at the location during the class (and
        related personal property), and (ii) you must act with integrity, treat
        others with respect, and always comply with applicable laws. If you are
        booking a Class for an additional User who is a minor or if you bring a
        minor to a Class, you must be legally authorized to act on behalf of the
        minor and you are solely responsible for the supervision of that minor.
      </p>
      <br />
      <br />
      <strong className="indent">
        4.2 Your Assumption of Risk. You acknowledge that many activities carry
        inherent risks and agree that, to the maximum extent permitted by
        applicable law, you assume the entire risk arising out of your access to
        and use of the Teache Platform and any Content (as defined in Section
        10), including your participation in any Class, use of any other
        Instructor Service, or any other interaction you have with other Members
        whether in person or online. This means it is your responsibility to
        investigate a Class and an Instructor to determine whether it is
        suitable for you. For example, Classes may carry risk of illness, bodily
        injury, disability, or death, and you freely and willfully assume those
        risks by choosing to participate in those Classes.
      </strong>
      <br />
      <br />
      <h2>Instructor Terms</h2>
      <br />
      <br />
      <strong id="5">5. Instructing on Teache.</strong>
      <br />
      <br />
      <strong className="indent">5.1 Instructor.</strong>
      <p>
        As an Instructor, Teache offers you the opportunity to share your
        knowledge of a subject with our vibrant community of Users - and earn
        money doing it. It’s easy to create a Listing and you are in control.
        You set your price, availability, cancellation policy, and rules for
        each Listing.
      </p>
      <br />
      <br />
      <strong className="indent">5.2 Contracting with Users.</strong>
      <p>
        When you accept a booking request or receive a booking confirmation
        through the Teache Platform, you are entering into a contract directly
        with the User and are responsible for delivering your Instructor Service
        under the terms and at the price specified in your Listing. You are also
        agreeing to pay applicable fees such as Teache’s service fee (and
        applicable taxes) for each booking. Teache will deduct amounts you owe
        from your payout unless you and Teache separately agree to a different
        method. Any terms, policies, or conditions that you include in any
        supplemental contract with Users must: (i) be consistent with these
        Terms, our Policies, and the information provided in your Listing, and
        (ii) be prominently disclosed in your Listing description.
      </p>
      <br />
      <br />
      <strong className="indent">5.3 Independence of Instructors.</strong>
      <p>
        Your relationship with Teache is that of an independent individual or
        entity and not an employee, agent, joint venturer, or partner of Teache,
        except that Teache acts as a payment collection agent as described in
        the Payments Terms. Teache does not direct or control your Instructor
        Service, and you agree that you have complete discretion as to whether
        and when to provide Instructor Services, what price to offer for
        Instructor Service, and on what terms you offer those services.
      </p>
      <br />
      <br />
      <strong id="6">6. Managing Your Listing.</strong>
      <br />
      <br />
      <strong className="indent">
        6.1 Creating and Managing Your Listing.
      </strong>
      <p>
        The Teache Platform provides tools that make it easy for you to set up
        and manage a Listing. Your Listing must include complete and accurate
        information about your Class, your price, other charges such as
        equipment fees, location fees, security deposits, and any rules or
        requirements that apply to your Users or Classes. You are responsible
        for keeping your Listing information (always including calendar
        availability) and content (such as photos) up-to-date and accurate. We
        recommend that you obtain appropriate insurance for your Classes and
        suggest you carefully review policy terms and conditions including
        coverage details and exclusions.
      </p>
      <br />
      <br />
      <strong className="indent">6.2 Know Your Legal Obligations.</strong>
      <p>
        You are responsible for understanding and complying with any laws,
        rules, regulations, and contracts with third parties that apply to your
        Class Listing or Instructor Services. Here are several notable examples:
        Some landlords and leases, or homeowner and condominium association
        rules, restrict or prohibit giving paid classes on a property. Some
        jurisdictions require Instructors to register, get a permit, or obtain a
        license before providing certain Instructor Services (such as preparing
        food, serving alcohol for sale, guiding tours, or operating a vehicle).
        In some places, the Classes you wish to offer may be prohibited
        altogether. Some jurisdictions require that you register Users who take
        your class. Check your local rules to learn which rules apply to the
        type of Classes you plan to offer. Information we provide regarding
        legal requirements is for informational purposes only - you should
        independently confirm your obligations. You are responsible for handling
        and using the personal data of Users and others in compliance with
        applicable privacy laws and these Terms, including our Instructor
        Privacy Standards. If you have questions about how local laws apply you
        should always seek legal advice.
      </p>
      <br />
      <br />
      <strong className="indent">6.3 Search Ranking.</strong>
      <p>
        The ranking of Listings in search results on the Teache Platform depends
        on a variety of factors, including these main parameters:
      </p>
      <ul>
        <li>
          User search parameters (e.g., number of Users, time, and price range),
        </li>
        <li>
          Class characteristics (e.g., price, calendar availability, number and
          quality of images, Reviews, Class type, Instructor status, age of the
          Listing, and average User popularity),
        </li>
        <li>
          User booking experience (e.g., customer service and cancellation
          history of the Instructor, ease of booking),
        </li>
        <li>
          Instructor requirements (e.g., minimum or maximum experience required,
          special equipment), and
        </li>
        <li>
          User preferences (e.g., previous classes, location from which the User
          is searching).
        </li>
      </ul>
      <br />
      <br />
      <p>
        Search results may appear different on our mobile application than they
        appear on our website. Teache may allow Instructors to promote their
        Listings in search or elsewhere on the Teache Platform by paying an
        additional fee.
      </p>
      <br />
      <br />
      <strong className="indent">6.4 Your Responsibilities.</strong>
      <p>
        You are responsible and liable for your own acts and omissions and are
        also responsible for the acts and omissions of anyone you allow to
        participate in providing your Instructor Services. You are responsible
        for setting your price and establishing rules and requirements for your
        Listing. You must describe any and all fees and charges in your Listing
        description and may not collect any additional fees or charges outside
        the Teache Platform. Do not encourage Users to create third-party
        accounts, submit reviews, provide their contact information, or take
        other actions outside the Teache Platform that may be in violation of
        our Off-Platform Policy.
      </p>
      <br />
      <br />
      <strong className="indent">
        6.5 Instructing as a Team or Organization.
      </strong>
      <p>
        If you work with a co-Instructor or are instructing as part of a team,
        business, or other organization, the entity you are a part of, as well
        as each individual who participates in providing Instructor Services, is
        responsible and liable as an Instructor under these Terms. If you accept
        terms or enter into contracts, you represent and warrant that you are
        authorized to enter into contracts for your team, business, or other
        organization and that each entity you use or are a part of is in good
        standing under the laws of the place where it is established. If you
        perform other functions, you represent and warrant that you are
        authorized to perform those functions. If you instruct Teache to
        transfer a portion of your payout to a co-Instructor or other
        Instructors or to send payments to someone else, you must be authorized
        to do so, and are responsible and liable for the payment amounts and
        accuracy of any payout information you provide.
      </p>
      <br />
      <br />
      <strong className="indent">
        6.6 Your Assumption of Risk. You acknowledge that Instructing carries
        inherent risks and agree that you assume the entire risk arising out of
        your access to and use of the Teache Platform, offering Instructor
        Services, or any interaction you have with other Members whether in
        person or online. You agree that you have had the opportunity to
        investigate the Teache Platform and any laws, rules, regulations, or
        obligations that may be applicable to your Listings or Instructor
        Services and that you are not relying upon any statement of law made by
        Teache.
      </strong>
      <br />
      <br />
      <strong id="7">
        7. Cancellations, Class Issues, and Booking Modifications.
      </strong>
      <br />
      <br />
      <strong className="indent">7.1 Cancellations and Class Issues.</strong>
      <p>
        In general, if a User cancels a reservation, the amount paid to you is
        determined by the cancellation policy that applies to that reservation.
        As an Instructor, you should not cancel on a User without a valid reason
        under our Extenuating Circumstances Policy or applicable law. If you
        cancel on a User without such a valid reason, we may impose
        a cancellation fee based on our Instructor Cancellation policy. If (i) a
        User experiences a Class Issue (as defined by the User Refund Policy),
        (ii) an Extenuating Circumstance arises, or (iii) a reservation is
        canceled under Section 13 of these Terms, the amount you are paid will
        be reduced by the amount we refund or otherwise provide to the User and
        by any other reasonable costs we incur as a result of the cancellation.
        If a User receives a refund after you have already been paid, or the
        amount of the refund and other costs incurred by Teache exceeds your
        payout, Teache may recover that amount from you, including by offsetting
        the refund against your future payouts. You agree that{" "}
      </p>
      <br />
      <br />
      <p>
        Teache’s User Refund Policy, Extenuating Circumstances Policy, and these
        Terms preempt the cancellation policy you set in situations where they
        allow for the cancellation of a reservation and/or the issuance of
        refunds to Users. If we reasonably expect to provide a refund to a User
        under one of these policies, we may delay the release of any payout for
        that reservation until a refund decision is made.
      </p>
      <br />
      <br />
      <strong className="indent">7.2 Booking Modifications.</strong>
      <p>
        Instructors and Users are responsible for any Class Booking
        Modifications they agree to make via the Teache Platform or which they
        direct Teache customer service to make on their behalf. They agree to
        pay any additional amounts, fees, or taxes associated with a Class
        Booking Modification.
      </p>
      <br />
      <br />
      <strong id="8">8. Taxes.</strong>
      <br />
      <br />
      <strong className="indent">8.1 Instructor Taxes.</strong>
      <p>
        As an Instructor, you are responsible for determining and fulfilling
        your obligations under applicable laws to report, collect, remit, or
        include in your price any applicable VAT or other indirect taxes,
        occupancy taxes, tourist, income, or other taxes ("<span>Taxes</span>").
      </p>
      <br />
      <br />
      <strong className="indent">
        8.2 Collection and Remittance by Teache.
      </strong>
      <p>
        In jurisdictions where Teache facilitates the collection and/or
        remittance of Taxes on behalf of Instructors, you instruct and authorize
        Teache to collect Taxes on your behalf, and/or to remit such Taxes to
        the relevant Tax authority. Any Taxes that are collected and/or remitted
        by Teache are identified to Members on their transaction records, as
        applicable. Teache may seek additional amounts from Members (including
        by deducting such amounts from future payouts) in the event that the
        Taxes collected and/or remitted are insufficient to fully discharge that
        Members’ tax obligations, and you agree that your sole remedy for Taxes
        collected by Teache is a refund from the applicable Tax authority. You
        acknowledge and agree that we retain the right, with prior notice to
        affected Members, to cease the collection and remittance of Taxes in any
        jurisdiction for any reason.
      </p>
      <br />
      <br />
      <strong className="indent">8.3 Tax Information.</strong>
      <p>
        In certain jurisdictions, Tax regulations may require that we collect
        and/or report Tax information about you, withhold Taxes from payouts to
        you, or both. If you fail to provide us with documentation that we
        determine to be sufficient to support any such obligation to withhold
        Taxes from payouts to you, we may withhold payouts up to the amount as
        required by law, until sufficient documentation is provided. You agree
        that Teache may issue, on your behalf, invoices or similar documentation
        for VAT, GST, consumption or other Taxes for your Instructor Services to
        facilitate accurate tax reporting by you, our Users, and/or their
        organizations.
      </p>
      <br />
      <br />
      <h2>General Terms</h2>
      <br />
      <br />
      <strong id="9">9. Reviews.</strong>
      <p>
        After each Class, Users and Instructors will have an opportunity to
        review each other. Your Review must be accurate and may not contain any
        discriminatory, offensive, defamatory, or other language that violates
        our Content Policy or Review Policy. Reviews are not verified by Teache
        for accuracy and may be incorrect or misleading.
      </p>
      <br />
      <br />
      <strong id="10">10. Content.</strong>
      <p>
        Parts of the Teache Platform enable you to provide feedback, text,
        photos, audio, video, information, and other content (collectively, “
        <span>Content</span>”). By providing Content, in whatever form and
        through whatever means, you grant Teache a non-exclusive, worldwide,
        royalty-free, irrevocable, perpetual, sub-licensable and transferable
        license to copy, modify, prepare derivative works of, distribute,
        publish and otherwise exploit, that Content, without limitation. If
        Content includes personal information, our Privacy Policy describes how
        we use that personal information. Where Teache pays for the creation of
        Content or facilitates its creation, Teache may own that Content (in
        which case, supplemental terms or disclosures will state that). You are
        solely responsible for all Content that you provide and warrant that you
        either own it or are authorized to grant Teache the rights described in
        these Terms. You are responsible and liable if any of your Content
        violates or infringes the intellectual property or privacy rights of any
        third party. Content must comply with our Content
        Policy and Nondiscrimination Policy, which prohibit, among other things,
        discriminatory, obscene, harassing, deceptive, violent, and illegal
        content. You agree that Teache may make available services or automated
        tools to translate Content and that your Content may be translated using
        such services or tools. Teache does not guarantee the accuracy or
        quality of translations and Members are responsible for confirming the
        accuracy of such translations.
      </p>
      <br />
      <br />
      <strong id="11">11. Fees.</strong>
      <p>
        Teache may charge fees (and applicable Taxes) to Instructors and Users
        for use of the Teache Platform. Except as otherwise provided on the
        Teache Platform, service fees are non-refundable. Teache reserves the
        right to change their service fees at any time and will provide Members
        notice of any fee changes before they become effective. Fee changes will
        not affect bookings made prior to the effective date of the fee change.
        If you disagree with a fee change you may terminate this agreement at
        any time pursuant to Section 13.2.
      </p>
      <br />
      <br />
      <strong id="12">12. Teache Platform Rules.</strong>
      <br />
      <br />
      <strong className="indent">12.1 Rules.</strong>
      <p>
        You must follow these rules and must not help or induce others to break
        or circumvent these rules:
      </p>
      <br />
      <br />
      <ul>
        <li>
          Act with integrity and treat others with respect
          <ul>
            <li>
              Do not lie, misrepresent something or someone, or pretend to be
              someone else.
            </li>
            <li>
              Be polite and respectful when you communicate or interact with
              others.
            </li>
            <li>
              Follow our Nondiscrimination Policy, and do not discriminate
              against or harass others.
            </li>
          </ul>
        </li>
        <li>
          Do not scrape, hack, reverse engineer, compromise, or impair the
          Teache Platform
          <ul>
            <li>
              Do not use bots, crawlers, scrapers, or other automated means to
              access or collect data or other content from or otherwise interact
              with the Teache Platform.
            </li>
            <li>
              Do not hack, avoid, remove, impair, or otherwise attempt to
              circumvent any security or technological measures used to protect
              the Teache Platform or Content.
            </li>
            <li>
              Do not decipher, decompile, disassemble, or reverse engineer any
              of the software or hardware used to provide the Teache Platform.
            </li>
            <li>
              Do not take any action that could damage or adversely affect the
              performance or proper functioning of the Teache Platform.
            </li>
          </ul>
        </li>
        <li>
          Only use the Teache Platform as authorized by these Terms or another
          agreement with us
          <ul>
            <li>
              You may only use another Member’s personal information as
              necessary to facilitate a transaction using the Teache Platform as
              authorized by these Terms.
            </li>
            <li>
              Do not use the Teache Platform, our messaging tools, or Members’
              personal information to send commercial messages without the
              recipient’s express consent.
            </li>
            <li>
              You may use Content made available through the Teache Platform
              solely as necessary to enable your use of the Teache Platform as a
              User or Instructor.
            </li>

            <li>
              Do not use Content unless you have permission from the Content
              owner or the Content’s use is authorized by us in these Terms or
              another agreement you have with us.
            </li>
            <li>
              Do not request, make, or accept a booking or any payment outside
              of the Teache Platform to avoid paying fees or taxes or for any
              other reason.
            </li>
            <li>
              Do not require or encourage Users to open an account, leave a
              review, complete a survey, or otherwise interact with a
              third-party website, application, or service before, during, or
              after a reservation, unless authorized by Teache.
            </li>
            <li>
              Do not engage in any practices that are intended to manipulate our
              search algorithm.
            </li>
            <li>
              Do not book Instructor Services unless you truly intend to use
              those Instructor Services.
            </li>
            <li>
              Do not use, copy, display, mirror, or frame the Teache Platform,
              any Content, any Teache branding, or any page layout or design
              without our consent.
            </li>
          </ul>
        </li>

        <li>
          Honor your legal obligations
          <ul>
            <li>
              Understand and follow the laws that apply to you, including
              privacy, data protection, and export laws
            </li>
            <li>
              If you provide us with someone else’s personal information, you
              (i) must do so in compliance with applicable law, (ii) must be
              authorized to do so, and (iii) authorize us to process that
              information under our Privacy Policy.
            </li>
            <li>Read and follow our Terms, Policies , and Standards.</li>

            <li>
              Do not use the name, logo, branding, or trademarks of Teache or
              others without permission.
            </li>
            <li>
              Do not use or register any domain name, social media handle, trade
              name, trademark, branding, logo, or other source identifier that
              may be confused with Teache branding.
            </li>
            <li>
              Do not offer Instructor Services that violate the laws or
              agreements that apply to you.
            </li>
            <li>
              Do not offer or solicit prostitution or participate in or
              facilitate human trafficking.
            </li>
          </ul>
        </li>
      </ul>
      <br />
      <br />
      <strong className="indent">12.2 Reporting Violations.</strong>
      <p>
        If you believe that a Member, Listing, or Content poses an imminent risk
        of harm to a person or property, you should immediately contact local
        authorities before contacting Teache. In addition, if you believe that a
        Member, Listing, or Content has violated our Standards, you should
        report your concerns to Teache. If you report an issue to local
        authorities, Teache may request a copy of that report. Except as
        required by law, you agree that we are not obligated to take action in
        response to any report.
      </p>
      <br />
      <strong className="indent">12.3 Copyright Notifications.</strong>
      <p>
        If you believe that Content on the Teache Platform infringes copyrights,
        please notify us in accordance with our Copyright Policy.
      </p>
      <br />
      <strong id="13">13. Termination, Suspension, and Other Measures.</strong>
      <br />
      <br />
      <strong className="indent">13.1 Term.</strong>
      <p>
        The agreement between you and Teache reflected by these Terms is
        effective when you access the Teache Platform (e.g., to create an
        account) and remains in effect until either you or we terminate the
        agreement in accordance with these Terms.
      </p>
      <br />
      <strong className="indent">13.2 Termination.</strong>
      <p>
        You may terminate this agreement at any time by sending us an email or
        by deleting your account. Teache may terminate this agreement and your
        account for any reason by giving you a notice via email or using any
        other contact information you have provided for your account. Teache may
        also terminate this agreement immediately and without notice and stop
        providing access to the Teache Platform if you breach these Terms,
        violate our Policies, or violate applicable laws, or if we reasonably
        believe termination is necessary to protect Teache, its Members, or
        third parties. If your account has been inactive for more than two
        years, we may terminate your account without prior notice.
      </p>
      <br />
      <strong className="indent">13.3 Member Violations.</strong>
      <p>
        If (i) you breach these Terms, our Policies, or our Standards, (ii) you
        violate applicable laws, regulations, or third-party rights, or (iii)
        Teache believes it is reasonably necessary to protect Teache, its
        Members, or third parties; Teache may, with or without prior notice:
      </p>
      <br />
      <ul>
        <li>
          suspend or limit your access to or use of the Teache Platform and/or
          your account;
        </li>
        <li>suspend or remove Listings, Reviews, or other Content;</li>
        <li>cancel pending or confirmed bookings; or</li>
        <li>
          suspend or revoke any special status associated with your account.
        </li>
      </ul>
      <br />
      <p>
        For minor violations or where otherwise appropriate as Teache determines
        in its sole discretion, you will be given notice of any intended measure
        by Teache and will be afforded an opportunity to resolve the issue. You
        may appeal actions taken by us under this Section by contacting customer
        service. If a reservation is canceled under this Section, the amount
        paid to the Instructor will be reduced by the amount we refund or
        otherwise provide to the User and will be further reduced by any other
        costs we incur as a result of the cancellation.
      </p>
      <br />
      <strong className="indent">13.4 Legal Mandates.</strong>
      <p>
        Teache may take any action it determines is reasonably necessary to
        comply with applicable law, or the order or request of a court, law
        enforcement, or other administrative agency or governmental body,
        including the measures described above in Section 13.3.
      </p>
      <br />
      <strong className="indent">13.5 Effect of Termination.</strong>
      <p>
        If you are an Instructor and terminate your Teache account, any
        confirmed booking(s) will be automatically canceled and your Users will
        receive a full refund. If you terminate your account as a User, any
        confirmed booking(s) will be automatically canceled, and any refund will
        depend upon the terms of the reservation’s cancellation policy. When
        this agreement has been terminated, you are not entitled to a
        restoration of your account or any of your Content. If your access to or
        use of the Teache Platform has been limited, or your Teache account has
        been suspended, or this agreement has been terminated by us, you may not
        register a new account or access or use the Teache Platform through an
        account of another Member.
      </p>
      <br />
      <strong className="indent">13.6 Survival.</strong>
      <p>
        Parts of these Terms that by will survive termination of this agreement,
        including Sections 2 through 26.
      </p>
      <br />
      <strong id="14">14. Modification.</strong>
      <br />
      <p>
        Teache may modify these Terms at any time. When we make material changes
        to these Terms, we will post the revised Terms on the Teache Platform
        and update the “Last Updated” date at the top of these Terms. We will
        also provide you with notice of any material changes by email at least
        30 days before the date they become effective. If you disagree with the
        revised Terms, you may terminate this agreement immediately as provided
        in these Terms. If you do not terminate your agreement before the date
        the revised Terms become effective, your continued access to or use of
        the Teache Platform will constitute acceptance of the revised Terms.
      </p>
      <br />
      <strong id="15">15. Resolving Complaints and Damage Claims.</strong>
      <p>
        If a Member provides evidence that another Member damaged their real or
        personal property ("Damage Claim"), the complaining Member can seek
        compensation. If the complaining Member escalates a Damage Claim to
        Teache, the other Member will be given an opportunity to respond. If the
        responding Member agrees to pay, or Teache determines in its sole
        discretion that they are responsible for the Damage Claim, Teache can
        collect any sums required to cover the Damage Claim from the responding
        Member and/or against any security deposit. You agree that Teache may
        seek to recover from you under any insurance policies you maintain and
        that Teache may also pursue against you any remedies it may have
        available under applicable law. You agree to cooperate in good faith,
        provide any information Teache requests, execute documents, and take
        further reasonable action, in connection with Damage Claims, Member
        complaints, claims under insurance policies, or other claims related to
        your provision or use of Instructor Services.
      </p>
      <br />
      <strong id="16">16. Teache’s Role.</strong>
      <p>
        We offer a platform that enables Members to publish, offer, search for,
        and book Classes. While we work hard to ensure that our Members have
        great experiences while using Teache, we do not and cannot control the
        conduct of Users and Instructors. You acknowledge that Teache has the
        right, but does not have any obligation, to monitor the use of the
        Teache Platform and verify information provided by our Members. For
        example, we may review, disable access to, remove, or edit Content in
        order to (i) operate, secure, and improve the Teache Platform (including
        for fraud prevention, risk assessment, investigation, and customer
        support purposes); (ii) ensure Members’ compliance with these Terms;
        (iii) comply with applicable law or the order or requirement of a court,
        law enforcement or other administrative agency or governmental body;
        (iv) address Content that we determine is harmful or objectionable; (v)
        take actions set out in these Terms; and (vi) maintain and enforce any
        quality or eligibility criteria, including by removing Listings that
        don’t meet quality and eligibility criteria. Members acknowledge and
        agree that Teache administers its Policies (such as our Extenuating
        Circumstances Policy) and Standards (such as basic requirements for
        Instructors), including decisions about whether and how to apply them to
        a particular situation, at its sole discretion. Members agree to
        cooperate with and assist Teache in good faith and to provide Teache
        with such information and take such actions as may be reasonably
        requested by Teache with respect to any investigation undertaken by
        Teache regarding the use or abuse of the Teache Platform. Teache is not
        acting as an agent for any Member except for where Teache acts as a
        collection agent as provided in the Payments Terms.
      </p>
      <br />
      <strong id="17">17. Member Accounts.</strong>
      <p>
        You must register an account to access and use many features of the
        Teache Platform. Registration is only permitted for legal entities,
        partnerships, and natural persons who are 18 years or older. You
        represent and warrant that you are not a person or entity barred from
        using the Teache Platform under the laws of the United States, your
        place of residence, or any other applicable jurisdiction. You must
        provide accurate, current, and complete information during registration
        and keep your account information up to date. You may not register more
        than one account or transfer your account to someone else. You are
        responsible for maintaining the confidentiality and security of your
        account credentials and may not disclose your credentials to any third
        party. You are responsible and liable for activities conducted through
        your account and must immediately notify Teache if you suspect that your
        credentials have been lost, stolen, or your account is otherwise
        compromised. If and as permitted by applicable law, we may, but have no
        obligation to, (i) ask you to provide identification or other
        information, (ii) undertake checks designed to help verify your identity
        or background, (iii) screen you against third-party databases or other
        sources and request reports from service providers, and (iv) obtain
        reports from public records of criminal convictions or sex offender
        registrations or their local equivalents.
      </p>
      <br />
      <br />
      <strong id="18">18. Disclaimer of Warranties.</strong>
      <br />
      <br />
      <strong className="indent">
        We provide the Teache Platform and all Content “as is” without warranty
        of any kind and we disclaim all warranties, whether express or implied.
        This means, for example, (i) we do not endorse or warrant the existence,
        conduct, performance, safety, quality, legality or suitability of any
        User, Instructor, Classes, Listing, or third party; (ii) we do not
        warrant the performance or non-interruption of the Teache Platform; and
        (iii) we do not warrant that verification, identity or background checks
        conducted on Listings or Members (if any) will identify past misconduct
        or prevent future misconduct. Any references to a Member or Listing
        being "verified" (or similar language) indicate only that the Member,
        Listing, or Teache has completed a relevant verification or
        identification process and nothing else. The disclaimers in these Terms
        apply to the maximum extent permitted by law. If you have statutory
        rights or warranties we cannot disclaim, the duration of any such
        statutorily required rights or warranties will be limited to the maximum
        extent permitted by law.
      </strong>
      <br />
      <br />
      <strong id="19">19. Limitations on Liability.</strong>
      <br />
      <br />
      <strong className="indent">
        Neither Teache (including its affiliates and personnel) nor any other
        party involved in creating, producing, or delivering the Teache Platform
        or any Content will be liable for any incidental, special, exemplary or
        consequential damages, including lost profits, loss of data or loss of
        goodwill, service interruption, computer damage or system failure or the
        cost of substitute products or services, or for any damages for personal
        or bodily injury or emotional distress arising out of or in connection
        with (i) these Terms, (ii) the use of or inability to use the Teache
        Platform or any Content, (iii) any communications, interactions, or
        meetings you may have with someone you interact or meet with through, or
        as a result of, your use of the Teache Platform, or (iv) publishing or
        booking of a Class, including the provision or use of Instructor
        Services, whether based on warranty, contract, tort (including
        negligence), product liability or any other legal theory, and whether or
        not Teache has been informed of the possibility of such damage, even if
        a limited remedy set out in these Terms is found to have failed its
        essential purpose. Except for our obligation to transmit payments to
        Instructors under these Terms, in no event will Teache’s aggregate
        liability for any claim or dispute arising out of or in connection with
        these Terms, your interaction with any Members, or your use of or
        inability to use the Teache Platform, any Content, or any Instructor
        Service, exceed: (A) to Users, the amount you paid as a User during the
        12-month period prior to the event giving rise to the liability; (B) to
        Instructors, the amount paid to you as an Instructor in the 12-month
        period prior to the event giving rise to the liability; or (C) to anyone
        else, one hundred U.S. dollars (US$100). These limitations of liability
        and damages are fundamental elements of the agreement between you and
        Teache. If applicable law does not allow the limitations of liability
        set out in these Terms, the above limitations may not apply to you.
      </strong>
      <br />
      <br />
      <strong id="20">20. Indemnification.</strong>
      <br />
      <br />
      <strong className="indent">
        To the maximum extent permitted by applicable law, you agree to release,
        defend (at Teache’s option), indemnify, and hold Teache (other
        affiliates, and their personnel) harmless from and against any claims,
        liabilities, damages, losses, and expenses, including, without
        limitation, reasonable legal and accounting fees, arising out of or in
        any way connected with (i) your breach of these Terms (including any
        supplemental or additional terms that apply to a product or feature) or
        our Policies or Standards, (ii) your improper use of the Teache
        Platform, (iii) your interaction with any Member or participation in a
        Class or other Instructor Service, including, without limitation, any
        injuries, losses or damages (whether compensatory, direct, incidental,
        consequential or otherwise) of any kind arising in connection with or as
        a result of such interaction, participation or use, (iv) your failure,
        or our failure at your direction, to accurately report, collect or remit
        Taxes, or (v) your breach of any laws, regulations, or third-party
        rights such as intellectual property or privacy rights.
      </strong>
      <br />
      <br />
      <strong id="21">21. Contracting Entities.</strong>
      <p>
        Based on your country of residence or establishment and what you are
        doing on the Teache Platform, Schedule 1 (see below) establishes the
        Teache entity with whom you are contracting. If we identify, through the
        Teache Platform, a Teache entity other than the one established on
        Schedule 1 as being responsible for a product, feature, or transaction,
        the Teache entity so identified is your contracting entity with respect
        to that product, feature, or transaction. If you change your country of
        residence or establishment, the Teache company you contract with (as
        established in Schedule 1), and the applicable version of the Terms of
        Service will be determined by your new country of residence or
        establishment, from the date on which your country of residence or
        establishment changes.
      </p>
      <br />
      <br />
      <strong id="22">22. United States Governing Law and Venue.</strong>
      <p>
        If you reside or have your place of establishment in the United States,
        these Terms will be interpreted in accordance with the laws of the State
        of California and the United States of America, without regard to
        conflict-of-law provisions. Judicial proceedings (other than small
        claims actions) that are excluded from the arbitration agreement in
        Section 23 must be brought in state or federal court in Miami, Florida
        unless you and Teache both agree to a different location. You and Teache
        both consent to venue and personal jurisdiction in Miami, Florida.
      </p>
      <br />
      <br />
      <strong id="23">
        23. United States Dispute Resolution and Arbitration Agreement.
      </strong>
      <br />
      <br />
      <strong className="indent">23.1 Application.</strong>
      <p>
        This Arbitration Agreement only applies to you if your country of
        residence or establishment is the United States. If your country of
        residence or establishment is not the United States, and you
        nevertheless attempt to bring any legal claim against Teache in the
        United States, this Arbitration Agreement will apply for determination
        of the threshold issue of whether this Section 23 applies to you and all
        other threshold determinations, including residency, arbitrability,
        venue, and applicable law.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.2 Overview of Dispute Resolution Process.
      </strong>
      <p>
        Teache is committed to participating in a consumer-friendly dispute
        resolution process. To that end, these Terms provide for a two-part
        process for individuals to whom this Section 23 applies: (1) An informal
        negotiation directly with Teache’s customer service team (described in
        paragraph 23.3, below), and, if necessary, (2) A binding arbitration
        administered by the American Arbitration Association (“
        <span>AAA</span>”). You and Teache each retain the right to seek relief
        in small claims court as an alternative to arbitration.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.3 Mandatory Pre-Arbitration Dispute Resolution and Notification.
      </strong>
      <p>
        At least 30 days prior to initiating an arbitration, you and Teache each
        agree to notify the other party of the dispute in writing and attempt in
        good faith to negotiate an informal resolution. You must send your
        notice of dispute to Teache by mailing it to Teache’s agent for service
        at
        <span>
          Northwest Registered Agent, 7901 4th Street N, Suite 300, St
          Petersburg FL, 33702.
        </span>
        Teache will send its notice of dispute to the email address associated
        with your Teache account. A notice of dispute must include the party’s
        name and preferred contact information, a brief description of the
        dispute, and the relief sought. If the parties are unable to resolve the
        dispute within the 30-day period, only then may either party commence
        arbitration by filing a written Demand for Arbitration (available at
        www.adr.org) with the AAA and providing a copy to the other party as
        specified in the AAA Rules (available at www.adr.org).
      </p>
      <br />
      <br />
      <strong className="indent">
        23.4 Agreement to Arbitrate. You and Teache mutually agree that any
        dispute, claim, or controversy arising out of or relating to these Terms
        or the applicability, breach, termination, validity, enforcement, or
        interpretation thereof, or any use of the Teache Platform, Instructor
        Services, or any Content (collectively, “Disputes”) will be settled by
        binding individual arbitration (the “Arbitration Agreement”). If there
        is a dispute about whether this Arbitration Agreement can be enforced or
        applies to our Dispute, you and Teache agree that the arbitrator will
        decide that issue.
      </strong>
      <br />
      <br />
      <strong className="indent">
        23.5 Exceptions to Arbitration Agreement.
      </strong>
      <p>
        You and Teache each agree that the following causes of action and/or
        claims for relief are exceptions to the Arbitration Agreement and will
        be brought in a judicial proceeding in a court of competent jurisdiction
        (as defined by Section 22): (i) any claim or cause of action alleging
        actual or threatened infringement, misappropriation, or violation of a
        party’s copyrights, trademarks, trade secrets, patents, or other
        intellectual property rights; (ii) any claim or cause of action seeking
        emergency injunctive relief based on exigent circumstances (e.g.,
        imminent danger or commission of a crime, hacking, cyber-attack); or
        (iii) a request for the remedy of public injunctive relief. You and
        Teache agree that the remedy of public injunctive relief will proceed
        after the arbitration of all arbitrable claims, remedies, or causes of
        action, and will be stayed pending the outcome of the arbitration
        pursuant to section 3 of the Federal Arbitration Act.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.6 Arbitration Rules and Governing Law.
      </strong>
      <p>
        This Arbitration Agreement evidences a transaction in interstate
        commerce, and the Federal Arbitration Act governs all substantive and
        procedural interpretation and enforcement of this provision. The
        arbitration will be administered by AAA in accordance with the Consumer
        Arbitration Rules and/or other AAA arbitration rules determined to be
        applicable by the AAA (the “<span>AAA Rules</span>“) then in effect,
        except as modified here. The AAA Rules are available at www.adr.org. In
        order to initiate arbitration, a completed written demand (available at
        www.adr.org) must be filed with the AAA and provided to the other party,
        as specified in the AAA rules.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.7 Modification to AAA Rules - Arbitration Hearing/Location.
      </strong>
      <p>
        In order to make the arbitration more convenient for you, Teache agrees
        that any required arbitration hearing may be conducted, at your
        choosing, (a) in the U.S. County where you reside; (b) in Miami-Dade
        County; (c) via phone or video conference; or (d) if all parties agree,
        solely by the submission of documents to the arbitrator.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.8 Modification of AAA Rules - Attorney’s Fees and Costs.
      </strong>
      <p>
        Your arbitration fees and your share of arbitrator compensation shall be
        governed by the AAA Rules and, where appropriate, will be limited by the
        AAA Consumer Rules. If such costs are determined by the arbitrator to be
        excessive, Teache will pay all arbitration fees and expenses. Either
        party may make a request that the arbitrator award attorneys’ fees and
        costs upon proving that the other party has asserted a claim,
        crossclaim, or defense that is groundless in fact or law, brought in bad
        faith or for the purpose of harassment, or is otherwise frivolous, as
        allowed by applicable law and the AAA Rules.
      </p>
      <br />
      <br />
      <strong className="indent">23.9 Arbitrator’s Decision.</strong>
      <p>
        The arbitrator’s decision will include the essential findings and
        conclusions upon which the arbitrator based the award. Judgment on the
        arbitration award may be entered in any court with proper jurisdiction.
        The arbitrator may award any relief allowed by law or the AAA Rules, but
        declaratory or injunctive relief may be awarded only on an individual
        basis and only to the extent necessary to provide relief warranted by
        the claimant’s individual claim.
      </p>
      <br />
      <br />
      <strong className="indent">23.10 Jury Trial Waiver. </strong>
      <p>
        You and Teache acknowledge and agree that each party waives the right to
        a trial by jury as to all arbitrable Disputes.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.11 No Class Actions or Representative Proceedings.
      </strong>
      <p>
        You and Teache acknowledge and agree that, to the fullest extent
        permitted by law, each party waives the right to participate as a
        plaintiff or class member in any purported class-action lawsuit,
        class-wide arbitration, private attorney general action, or any other
        representative or consolidated proceeding. Unless you and Teache agree
        in writing, the arbitrator may not consolidate more than one party’s
        claims and may not otherwise preside over any form of any class or
        representative proceeding. If there is a final judicial determination
        that applicable law precludes enforcement of the waiver contained in
        this paragraph as to any claim, cause of action or requested remedy,
        then that claim, cause of action or requested remedy, and only that
        claim, cause of action or requested remedy, will be severed from this
        agreement to arbitrate and will be brought in a court of competent
        jurisdiction. In the event that a claim, cause of action, or requested
        remedy is severed pursuant to this paragraph, then you and Teache agree
        that the claims, causes of action, or requested remedies that are not
        subject to arbitration will be stayed until all arbitrable claims,
        causes of action, and requested remedies are resolved by the arbitrator.
      </p>
      <br />
      <br />
      <strong className="indent">23.12 Severability.</strong>
      <p>
        Except as provided in Section 23.11, in the event that any portion of
        this Arbitration Agreement is deemed illegal or unenforceable, such
        provision will be severed and the remainder of the Arbitration Agreement
        will be given full force and effect.
      </p>
      <br />
      <br />
      <strong className="indent">
        23.13 Changes to Agreement to Arbitrate.
      </strong>
      <p>
        If Teache changes this Section 23 after the date you last accepted these
        Terms (or accepted any subsequent changes to these Terms), you may
        reject that change by sending us written notice (including by email)
        within 30 days of the date the change is effective. Rejecting a new
        change, however, does not revoke or alter your prior consent to any
        earlier agreements to arbitrate any Dispute between you and Teache (or
        your prior consent to any subsequent changes thereto), which will remain
        in effect and enforceable as to any Dispute between you and Teache.
      </p>
      <br />
      <br />
      <strong className="indent">23.14 Survival</strong>
      <p>
        Except as provided in Section 23.12 and subject to Section 13.6, this
        Section 23 will survive any termination of these Terms and will continue
        to apply even if you stop using the Teache Platform or terminate your
        Teache account.
      </p>
      <br />
      <br />
      <strong id="24">24. Miscellaneous.</strong>
      <br />
      <br />
      <strong className="indent">
        24.1 Other Terms Incorporated by Reference.
      </strong>
      <p>
        Our User Refund Policy, Content Policy, Nondiscrimination Policy,
        Extenuating Circumstances Policy, Policies, Standards, and other
        supplemental policies and terms linked to in these Terms apply to your
        use of the Teache Platform, are incorporated by reference and form part
        of your agreement with Teache.
      </p>
      <br />
      <br />
      <strong className="indent">24.2 Interpreting these Terms.</strong>
      <p>
        Except as they may be supplemented by additional terms, conditions,
        policies, guidelines, standards, and in-product disclosures, these Terms
        (including those items incorporated by reference) constitute the entire
        agreement between you and Teache pertaining to your access to or use of
        the Teache Platform and supersede any and all prior oral or written
        understandings or agreements between you and Teache. These Terms do not
        and are not intended to confer any rights or remedies upon anyone other
        than you and Teache. If any provision of these Terms is held to be
        invalid or unenforceable, except as otherwise indicated in Section 23.11
        above, such provision will be struck and will not affect the validity
        and enforceability of the remaining provisions. Where the word “will” is
        used in these Terms, it connotes an obligation with the same meaning as
        “shall.”
      </p>
      <br />
      <br />
      <strong className="indent">24.3 No Waiver. </strong>
      <p>
        Teache’s failure to enforce any right or provision in these Terms will
        not constitute a waiver of such right or provision unless acknowledged
        and agreed to by us in writing. Except as expressly set forth in these
        Terms, the exercise by either party of any of its remedies under these
        Terms will be without prejudice to its other remedies under these Terms
        or otherwise permitted under law.
      </p>
      <br />
      <br />
      <strong className="indent">24.4 Assignment.</strong>
      <p>
        You may not assign, transfer, or delegate this agreement or your rights
        and obligations hereunder without Teache's prior written consent. Teache
        may, without restriction, assign, transfer, or delegate this agreement
        and any rights and obligations hereunder, at its sole discretion, with
        30 days’ prior notice.
      </p>
      <br />
      <br />
      <strong className="indent">24.5 Notice. </strong>
      <p>
        Unless specified otherwise, any notices or other communications to
        Members permitted or required under this agreement will be provided
        electronically and given by Teache via email, Teache Platform
        notification, messaging service (including SMS), or any other contact
        method enabled by us and provided by you.
      </p>
      <br />
      <br />
      <strong className="indent">24.6 Third-Party Services. </strong>
      <p>
        The Teache Platform may contain links to third-party websites,
        applications, services, or resources (“<span>Third-Party Services</span>
        ”) that are subject to different terms and privacy practices. Teache is
        not responsible or liable for any aspect of such Third-Party Services,
        and links to such Third-Party Services are not an endorsement.
      </p>
      <br />
      <br />
      <strong className="indent">24.7 Google Terms.</strong>
      <p>
        Some translations on the Teache Platform are powered by Google. Google
        disclaims all warranties related to translations, express or implied,
        including any warranties of accuracy, reliability, and any implied
        warranties for merchantability, fitness for a particular purpose, and
        non-infringement. Some areas of the Teache Platform implement Google
        Maps/Earth mapping services, including Google Maps API(s). Your use of
        Google Maps/Earth is subject to the Google Maps/Google Earth Additional
        Terms of Service.
      </p>
      <br />
      <br />
      <strong className="indent">24.8 Apple Terms. </strong>
      <p>
        If you access or download our application from the Apple App Store, you
        agree to Apple’s Licensed Application End User License Agreement.
      </p>
      <br />
      <br />
      <strong className="indent">24.9 Teache Platform Content.</strong>
      <p>
        Content made available through the Teache Platform may be protected by
        copyright, trademark, and/or other laws of the United States and other
        countries. You acknowledge that all intellectual property rights for
        such Content are the exclusive property of Teache and/or its licensors
        and agree that you will not remove, alter, or obscure any copyright,
        trademark, service mark, or other proprietary rights notices. You may
        not use, copy, adapt, modify, prepare derivative works of, distribute,
        license, sell, transfer, publicly display, publicly perform, transmit,
        broadcast, or otherwise exploit any Content accessed through the Teache
        Platform except to the extent you are the legal owner of that Content or
        as expressly permitted in these Terms. Subject to your compliance with
        these Terms, Teache grants you a limited, non-exclusive,
        non-sublicensable, revocable, non-transferable license to (i) download
        and use the Application on your personal device(s); and (ii) access and
        view the Content made available on or through the Teache Platform and
        accessible to you, solely for your personal and non-commercial use.
      </p>
      <br />
      <br />
      <strong className="indent">24.10 Force Majeure. </strong>
      <p>
        Teache shall not be liable for any delay or failure to perform resulting
        from causes outside its reasonable control, including, but not limited
        to, acts of God, natural disasters, war, terrorism, riots, embargoes,
        acts of civil or military authorities, fire, floods, accidents,
        pandemics, epidemics or disease, strikes, or shortages of transportation
        facilities, fuel, energy, labor or materials.
      </p>
      <br />
      <br />
      <strong className="indent">24.11 Emails and SMS. </strong>
      <p>
        You will receive administrative communications from us using the email
        address or other contact information you provide for your Teache
        account. Enrollment in additional email subscription programs will not
        affect the frequency of these administrative emails, though you should
        expect to receive additional emails specific to the program(s) to which
        you have subscribed. You may also receive promotional emails from us. No
        fee is charged for these promotional emails, but third-party data rates
        could apply. You can control whether or not you receive promotional
        emails using the notification preferences in your account settings.
        Please note that you will not be able to take advantage of certain
        promotions if you disable certain communication settings or do not have
        a Teache account. In the U.S. if you consent to receive SMS (text
        messages) from us, you will be subject to our SMS Terms.
      </p>
      <br />
      <br />
      <strong className="indent">24.12 Contact Us. I</strong>
      <p>
        If you have any questions about these Terms, please email us at
        hello@teache.co.
      </p>
      <table>
        <tbody>
          <tr>
            <th width="25%">Your place of residence or establishment:</th>
            <th width="25%">Your activity on the Teache Platform:</th>
            <th width="25%">Airbnb contracting Entity:</th>
            <th width="25%">Contact information:</th>
          </tr>
          <tr>
            <td rowSpan="3" valign="top">
              <strong>United States</strong>
            </td>
            <td>Booking or offering classes located in the United States.</td>
            <td>Teache, Inc.</td>
            <td>888 Brannan Street, San Francisco, CA 94103, United States</td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default Terms;
