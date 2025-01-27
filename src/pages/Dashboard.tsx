import { AddRental } from "@/components/custom/dashboard";

const Dashboard = () => {
  /***
   * Dashboard will show all the properties of the posting user and change;
   *    1. vacant houses count
   *    2. Rental name
   *    3. images (maybe after renovation)
   *
   * There will also be options to add a new rental and
   * To pay and see subscription status or renew.
   *
   */

  return (
    <section>
      <div>
        <h2 className="text-2xl my-2 font-bold">Your Dashboard</h2>
      </div>
      <div>
        <h3 className="text-xl my-2">You have no rental ads</h3>
        <p className="mb-2">Fill in the form to post a new ad</p>
      </div>

      <div id="form" className="border p-3 shadow-md rounded-md">
        <AddRental />
      </div>
    </section>
  );
};

export default Dashboard;
