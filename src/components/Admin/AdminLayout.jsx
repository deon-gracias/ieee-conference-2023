import AdminHeader from "./AdminHeader";

export default function AdminLayout({ children }) {
  return (
    <div>
      {/* <AdminHeader /> */}
      <main className="container pt-20 mx-auto">{children}</main>
    </div>
  );
}
