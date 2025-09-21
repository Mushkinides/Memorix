import * as React from "react";
import {
  Body,
  Button,
  Container,
  Head,
  Heading,
  Html,
  Link,
  Preview,
  Section,
  Text,
  Tailwind,
} from "@react-email/components";

interface PasswordResetEmailProps {
  userName: string;
  resetUrl: string;
  requestTime: string;
}

const PasswordResetEmail = ({
  userName,
  resetUrl,
  requestTime,
}: PasswordResetEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>Reset your Memorix password securely</Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Password Reset Request
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Memorix Account Security
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                We received a request to reset the password for your Memorix
                account {requestTime}.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                If you made this request, click the button below to create a new
                password:
              </Text>

              {/* Reset Password Button */}
              <Section className="text-center mb-[24px]">
                <Button
                  href={resetUrl}
                  className="bg-red-600 text-white px-[32px] py-[12px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Reset My Password
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                If the button doesn&apos;t work, you can copy and paste this
                link into your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 mb-[24px] m-0 break-all">
                <Link href={resetUrl} className="text-blue-600 underline">
                  {resetUrl}
                </Link>
              </Text>

              {/* Security Notice */}
              <Section className="bg-orange-50 border border-orange-200 rounded-[8px] p-[16px] mb-[24px]">
                <Text className="text-[14px] text-orange-800 mb-[8px] m-0 font-semibold">
                  ⚠️ Important Security Information:
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[8px] m-0">
                  • This reset link will expire in 1 hour for your security.
                </Text>
                <Text className="text-[14px] text-orange-700 mb-[8px] m-0">
                  • The link can only be used once
                </Text>
                <Text className="text-[14px] text-orange-700 m-0">
                  • If you didn&apos;t request this reset, please ignore this
                  email
                </Text>
              </Section>

              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                <strong>Didn&apos;t request a password reset?</strong>
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                If you didn&apos;t request this password reset, your account is
                still secure. You can safely ignore this email. No changes will
                be made to your account.
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                However, if you&apos;re concerned about your account security,
                we recommend:
              </Text>

              <Section className="mb-[24px]">
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Reviewing your recent account activity
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Ensuring you&apos;re using a strong, unique password
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Enabling two-factor authentication if available
                </Text>
              </Section>

              <Text className="text-[14px] text-gray-600 m-0">
                If you need help or have questions about your account security,
                please contact our support team.
              </Text>
            </Section>

            {/* Footer */}
            <Section className="border-t border-gray-200 pt-[24px] mt-[32px]">
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                Memorix - Smart Note Taking
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mb-[8px] m-0">
                123 Innovation Street, Tech Valley, CA 94000
              </Text>
              <Text className="text-[12px] text-gray-500 text-center m-0">
                <Link href="#" className="text-gray-500 underline">
                  Support Center
                </Link>{" "}
                |
                <Link href="#" className="text-gray-500 underline ml-[8px]">
                  Privacy Policy
                </Link>
              </Text>
              <Text className="text-[12px] text-gray-500 text-center mt-[8px] m-0">
                © 2025 Memorix. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
