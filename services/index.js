import { request, gql } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT

export const getCustomerOrdersFromEmail = async (customerEmail) => {
  const query = gql`
    query CustomerOrdersFromEmail($customerEmail: String!) {
      customers(where: { customerEmail: $customerEmail }) {
        customerEmail
        customerId
        customerName
        customerPhoneNumber
        orders(orderBy: createdAt_DESC) {
          createdAt
          debt
          orderDetails
          orderStatus
          totalAmount
          totalPrice
          updatedAt
          product {
            productDescription
            productName
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { customerEmail })
  return result.customers[0]
}

export const getCustomerOrdersFromId = async (customerId) => {
  const query = gql`
    query CustomerOrdersFromId($customerId: String!) {
      customers(where: { customerId: $customerId }) {
        customerEmail
        customerId
        customerName
        customerPhoneNumber
        orders(orderBy: createdAt_DESC) {
          createdAt
          debt
          orderDetails
          orderStatus
          totalAmount
          totalPrice
          updatedAt
          product {
            productDescription
            productName
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { customerId })
  return result.customers[0]
}

export const getCustomerOrdersFromName = async (customerName) => {
  const query = gql`
    query CustomerOrdersFromName($customerName: String!) {
      customers(where: { customerName: $customerName }) {
        customerEmail
        customerId
        customerName
        customerPhoneNumber
        orders(orderBy: createdAt_DESC) {
          createdAt
          debt
          orderDetails
          orderStatus
          totalAmount
          totalPrice
          updatedAt
          product {
            productDescription
            productName
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { customerName })
  return result.customers[0]
}

export const getCustomerOrdersFromPhoneNumber = async (customerPhoneNumber) => {
  const query = gql`
    query CustomerOrdersFromPhoneNumber($customerPhoneNumber: String!) {
      customers(where: { customerPhoneNumber: $customerPhoneNumber }) {
        customerEmail
        customerId
        customerName
        customerPhoneNumber
        orders(orderBy: createdAt_DESC) {
          createdAt
          debt
          orderDetails
          orderStatus
          totalAmount
          totalPrice
          updatedAt
          product {
            productDescription
            productName
          }
        }
      }
    }
  `

  const result = await request(graphqlAPI, query, { customerPhoneNumber })
  return result.customers[0]
}
