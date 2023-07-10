import Link from "next/link";

const clients = [
  {
    id: 0,
    name: "client0",
  },
  {
    id: 1,
    name: "client1",
  },
];

function ClientPage() {
  return (
    <ul>
      {clients.map((client) => {
        return (
          <li key={client.id}>
            <Link
              href={{
                pathname: "/clients/[id]",
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}

export default ClientPage;
