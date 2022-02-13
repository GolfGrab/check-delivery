import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getOrders = async (userPhoneNumber) => {
  const query = gql`
    query MyQuery($userPhoneNumber: String!) {
      orders(
        where: { userAccount: { userPhoneNumber: $userPhoneNumber } }
        orderBy: createdAt_DESC
      ) {
        orderDescription
        orderStatus
        id
        updatedAt
        product {
          productName
        }
        createdAt
        amount
        delivered
        other
        paidPrice
        totalPrice
      }
    }
  `

  const result = await request(graphqlAPI, query, { userPhoneNumber })
  return result.orders
}
