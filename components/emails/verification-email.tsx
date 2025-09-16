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

interface VerificationEmailProps {
  userName: string;
  verificationUrl: string;
}

const VerificationEmail = ({
  userName,
  verificationUrl,
}: VerificationEmailProps) => {
  return (
    <Html lang="en" dir="ltr">
      <Head />
      <Preview>
        Verify your Memorix account and start organizing your notes
      </Preview>
      <Tailwind>
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white rounded-[8px] p-[32px] max-w-[600px] mx-auto">
            {/* Header */}
            <Section className="text-center mb-[32px]">
              <Heading className="text-[28px] font-bold text-gray-900 m-0 mb-[8px]">
                Welcome to Memorix
              </Heading>
              <Text className="text-[16px] text-gray-600 m-0">
                Your intelligent note-taking companion
              </Text>
            </Section>

            {/* Main Content */}
            <Section className="mb-[32px]">
              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Hi there, {userName}!
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Thanks for signing up for Memorix! We&apos;re excited to help
                you organize your thoughts, ideas, and notes in a smarter way.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] m-0">
                To get started and secure your account, please verify your email
                address by clicking the button below:
              </Text>

              {/* Verification Button */}
              <Section className="text-center mb-[24px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[12px] rounded-[8px] text-[16px] font-semibold no-underline box-border"
                >
                  Verify Your Email
                </Button>
              </Section>

              <Text className="text-[14px] text-gray-600 mb-[16px] m-0">
                If the button doesn&apos;t work, you can copy and paste this
                link into your browser:
              </Text>

              <Text className="text-[14px] text-blue-600 mb-[24px] m-0 break-all">
                <Link
                  href={verificationUrl}
                  className="text-blue-600 underline"
                >
                  {verificationUrl}
                </Link>
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[16px] m-0">
                Once verified, you&apos;ll be able to:
              </Text>

              <Section className="mb-[24px]">
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Create and organize unlimited notes
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Search through your notes instantly
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Sync across all your devices
                </Text>
                <Text className="text-[14px] text-gray-700 mb-[8px] m-0">
                  • Share notes with team members
                </Text>
              </Section>

              <Text className="text-[14px] text-gray-600 m-0">
                This verification link will expire in 24 hours. If you
                didn&apos;t create an account with Memorix, you can safely
                ignore this email.
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
                  Unsubscribe
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

export default VerificationEmail;
