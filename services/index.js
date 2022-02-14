import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getCustomerOrders = async (userPhoneNumber) => {
  const query = gql`
    query CustomerOrders($userPhoneNumber: String!) {
      customer(where: { customerPhoneNumber: $userPhoneNumber }) {
        order(orderBy: createdAt_DESC) {
          createdAt
          orderDetails
          orderStatus
          product {
            productName
            productDescription
          }
          totalAmount
          totalPrice
          debt
        }
        customerName
      }
    }
  `

  const result = await request(graphqlAPI, query, { userPhoneNumber })
  return result.customer
}
